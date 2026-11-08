import type { RequestHandler } from './$types';
import type {
	CookieSetOptions,
	CookieGetOptions,
	CookieDeleteOptions
} from '#lib/server/trpc/index.js';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '../index';

export const GET: RequestHandler = async ({ request, locals, cookies }) => {
	return fetchRequestHandler({
		endpoint: '/api/trpc',
		req: request,
		router: appRouter,
		createContext: () => ({
			setCookie: (name: string, value: string, options: CookieSetOptions) =>
				cookies.set(name, value, options),
			getCookie: (name: string, options?: CookieGetOptions) => cookies.get(name, options),
			deleteCookie: (name: string, options: CookieDeleteOptions) => cookies.delete(name, options)
		})
	});
};
