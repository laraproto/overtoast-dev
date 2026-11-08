import { parse, stringify } from 'devalue';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import {
	createTRPCClient,
	httpBatchLink,
	httpSubscriptionLink,
	splitLink,
	TRPCClientError
} from '@trpc/client';
import type { AppRouter } from '#routes/api/trpc/index.js';

export const transformer = {
	deserialize: (object: any) => parse(object),

	serialize: (object: any) => stringify(object)
};

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;

export function isTRPCClientError(cause: unknown): cause is TRPCClientError<AppRouter> {
	return cause instanceof TRPCClientError;
}

const trpc = createTRPCClient<AppRouter>({
	links: [
		splitLink({
			// uses the httpSubscriptionLink for subscriptions

			condition: (op) => op.type === 'subscription',

			true: httpSubscriptionLink({
				url: `/api/trpc`,
				transformer
			}),

			false: httpBatchLink({
				url: `/api/trpc`,
				transformer
			})
		})
	]
});

export default trpc;
