import { command, getRequestEvent } from '$app/server';
import { auth } from '#lib/server/auth.js';
import { z } from 'zod';
import { APIError } from 'better-auth/api';
import { error, redirect } from '@sveltejs/kit';

export const signout = command(async () => {
	const event = getRequestEvent();
	await auth.api.signOut({
		headers: event.request.headers
	});
});

export const authConsent = command(z.object({ consent: z.boolean() }), async (data) => {
	const event = getRequestEvent();
	try {
		const result = await auth.api.oauth2Consent({
			body: {
				accept: data.consent,
				oauth_query: event.url.searchParams.toString()
			},

			headers: event.request.headers
		});
		if (result && result.redirect) {
			return redirect(302, result.url, { external: true });
		}
		return result;
	} catch (err) {
		if (err instanceof APIError) {
			console.error(err);
			return error(500, err.body?.error);
		}
		console.error(err);
	}
});
