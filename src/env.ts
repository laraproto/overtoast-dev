import { defineEnvVars } from '@sveltejs/kit/env';
import { z } from 'zod';

export const variables = defineEnvVars({
	DATABASE_URL: { description: 'The database connection string.' },
	DRIZZLE_MIGRATION_DIR: {
		description: 'The directory where Drizzle migrations are stored.',
		schema: z.string().default('./drizzle')
	},
	ORIGIN: {
		description: 'The app origin (base URL), e.g. `http://localhost:5173`.'
	},
	APP_SECRET: {
		description:
			'Secret used to sign tokens. For production use 32 characters generated with high entropy. See [Better Auth installation](https://www.better-auth.com/docs/installation).'
	},
	DISCORD_CLIENT_ID: {
		description: 'The Discord OAuth client ID.'
	},
	DISCORD_CLIENT_SECRET: {
		description: 'The Discord OAuth client secret.'
	}
});
