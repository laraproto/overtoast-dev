import type { PageServerLoad } from './$types';
import { redirect } from 'sveltekit-flash-message/server';

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
