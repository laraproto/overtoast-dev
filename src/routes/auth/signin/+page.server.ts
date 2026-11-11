import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { auth } from '#lib/server/auth.js';

export const load: PageServerLoad = async ({ url, locals }) => {
	if (locals.user || locals.session) {
		return redirect(302, decodeURIComponent(url.searchParams.get('return_to') || '/'));
	}
};

export const actions = {
	default: async (event) => {
		const params = event.url.searchParams;

		const result = await auth.api.signInSocial({
			body: {
				provider: 'discord',
				callbackURL: params.has('redirect_uri')
					? `/auth/consent?${params.toString()}`
					: decodeURIComponent(params.get('return_to') || '/')
			},
			headers: event.request.headers
		});
		if (result.url) {
			return redirect(302, result.url, { external: true });
		} else {
			return redirect(302, '/');
		}
	}
} satisfies Actions;
