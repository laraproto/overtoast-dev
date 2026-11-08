import { createTRPCClient, httpBatchLink, httpSubscriptionLink, splitLink } from '@trpc/client';
import { getRequestEvent } from '$app/server';

import type { AppRouter } from '#routes/api/trpc/index.js';
import { transformer } from '#lib/trpc.js';

const trpc = createTRPCClient<AppRouter>({
	links: [
		splitLink({
			condition: (op) => op.type === 'subscription',
			true: httpSubscriptionLink({
				url: `/api/trpc`,
				transformer,
				eventSourceOptions: async () => {
					const event = getRequestEvent();
					event.request.headers.delete('content-type');
					return {
						headers: event.request.headers
					};
				}
			}),
			false: httpBatchLink({
				url: `/api/trpc`,
				fetch: (input: RequestInfo | URL | string, init?: RequestInit) =>
					getRequestEvent().fetch(input, init),
				transformer,
				headers() {
					const event = getRequestEvent();
					event.request.headers.delete('content-type');
					return event.request.headers;
				}
			})
		})
	]
});

export default trpc;
