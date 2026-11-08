import type { RequestHandler } from './$types';
import { appRouter } from '#routes/api/trpc/index.js';
import { dev } from '$app/env';

export const GET: RequestHandler = async () => {
	if (!dev) {
		return new Response('Not Found', { status: 404 });
	}

	const { renderTrpcStudio } = await import('@srawad/trpc-studio');

	return new Response(
		renderTrpcStudio(appRouter, {
			url: '/api/trpc',
			meta: { title: 'Meow' }
		}),
		{ status: 200, headers: { 'Content-Type': 'text/html' } }
	);
};
