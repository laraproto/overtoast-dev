import type { PageServerLoad, Actions } from './$types';
import { redirect } from 'sveltekit-flash-message/server';
import { redirect as svelteRedirect } from '@sveltejs/kit';
import { auth } from '#lib/server/auth.js';
import { APIError } from 'better-auth';

export const load = (async ({ parent, locals, cookies }) => {
	const { oauthClient } = await parent();

	if (!locals.user) {
		return redirect(
			303,
			'/auth/signin',
			{ type: 'error', message: 'You must be signed in to continue.' },
			cookies
		);
	}
	if (!oauthClient) {
		return redirect(
			303,
			'/',
			{ type: 'error', message: 'Flow failed! Please try again.' },
			cookies
		);
	}

	return {};
}) satisfies PageServerLoad;

export const actions = {
	accept: async (event) => {
		try {
			const result = await auth.api.oauth2Consent({
				body: {
					accept: true,
					oauth_query: event.url.searchParams.toString()
				},

				headers: event.request.headers
			});
			if (result && result.redirect) {
				return svelteRedirect(302, result.url, { external: true });
			}
			return result;
		} catch (err) {
			if (err instanceof APIError) {
				console.error(err);
				redirect('/', { type: 'error', message: err.body?.error }, event.cookies);
			}
			console.error(err);
		}
	},
	reject: async (event) => {
		try {
			const result = await auth.api.oauth2Consent({
				body: {
					accept: false,
					oauth_query: event.url.searchParams.toString()
				},

				headers: event.request.headers
			});
			if (result && result.redirect) {
				return svelteRedirect(302, result.url, { external: true });
			}
			return result;
		} catch (err) {
			if (err instanceof APIError) {
				console.error(err);
				redirect('/', { type: 'error', message: err.body?.error }, event.cookies);
			}
			console.error(err);
		}
	}
} satisfies Actions;
