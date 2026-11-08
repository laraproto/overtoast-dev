import { publicProcedure, router } from '#lib/server/trpc/index.js';
import { z } from 'zod';

export const appRouter = router({
	test: publicProcedure.query(() => {
		return 'Meow!';
	})
});

export type AppRouter = typeof appRouter;
