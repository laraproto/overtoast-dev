import { ORIGIN, APP_SECRET, DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } from '$app/env/private';
import { betterAuth } from 'better-auth/minimal';
import { drizzleAdapter } from '@better-auth/drizzle-adapter/relations-v2';
import { passkey } from '@better-auth/passkey';
import { jwt } from 'better-auth/plugins';
import { admin } from 'better-auth/plugins';
import { oauthProvider } from '@better-auth/oauth-provider';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import { getRequestEvent } from '$app/server';
import * as schema from '#lib/server/db/auth.schema.js';
import { db } from '#lib/server/db/index.js';

export const auth = betterAuth({
	disabledPaths: ['/token'],
	baseURL: {
		allowedHosts: [new URL(ORIGIN ?? 'http://localhost:5173').host]
	},
	secret: APP_SECRET,
	database: drizzleAdapter(db, { provider: 'pg', schema }),
	socialProviders: {
		discord: {
			clientId: DISCORD_CLIENT_ID,
			clientSecret: DISCORD_CLIENT_SECRET
		}
	},
	plugins: [
		jwt({ disableSettingJwtHeader: true }),
		oauthProvider({
			loginPage: '/auth/signin',
			consentPage: '/auth/consent',
			allowPublicClientPrelogin: true
		}),
		passkey(),
		admin(),
		sveltekitCookies(getRequestEvent) // make sure this is the last plugin in the array
	]
});

export type Auth = typeof auth;
