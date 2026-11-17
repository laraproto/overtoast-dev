<script lang="ts">
	import * as NavigationMenu from '#lib/components/ui/navigation-menu/index.js';
	/* import { navigationMenuTriggerStyle } from './ui/navigation-menu/navigation-menu-trigger.svelte';
	import { resolve } from '$app/paths';
	import { page } from '$app/state'; */
</script>

<header
	class="sticky top-0 z-50 flex w-full items-center border-b-3 border-accent bg-(--background-900)"
>
	<div class="relative flex h-(--header-height) w-full items-center gap-2 px-4">
		<div class="pointer-events-none absolute inset-x-0 flex justify-center px-16">
			<div class="pointer-events-auto max-w-full">
				<NavigationMenu.Root>
					<NavigationMenu.List class="gap-2">
						<!-- <NavigationMenu.Item>
							<NavigationMenu.Link
								active={page.route.id === '/(overview)'}
								href={resolve('/(overview)')}
								class={[
									navigationMenuTriggerStyle(),
									'h-8 border-2 border-accent bg-background hover:bg-secondary data-active:bg-secondary'
								]}
							>
								Home
							</NavigationMenu.Link>
						</NavigationMenu.Item> -->
						<NavigationMenu.Indicator />
					</NavigationMenu.List>
				</NavigationMenu.Root>
			</div>
		</div>
	</div>
</header>
