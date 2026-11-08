import { initTRPC } from '@trpc/server';
import type { Cookies } from '@sveltejs/kit';

import { transformer } from '#lib/trpc.js';

export type CookieSetOptions = Parameters<Cookies['set']>[2];
export type CookieGetOptions = Parameters<Cookies['get']>[1];
export type CookieDeleteOptions = Parameters<Cookies['delete']>[1];

interface TRPCContext {
	setCookie: (name: string, value: string, options: CookieSetOptions) => void;
	getCookie: (name: string, options?: CookieGetOptions) => string | undefined;
	deleteCookie: (name: string, options: CookieDeleteOptions) => void;
}

const t = initTRPC.context<TRPCContext>().create({
	transformer
});

export const router = t.router;
export const publicProcedure = t.procedure;
