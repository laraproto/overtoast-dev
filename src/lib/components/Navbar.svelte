<script lang="ts">
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
</script>

<header
	class="sticky top-0 z-50 flex w-full items-center border-b-3 border-accent bg-(--background-900)"
>
	<div class="relative flex h-(--header-height) w-full items-center gap-2 px-4">
		<div class="pointer-events-none absolute inset-x-0 flex justify-center px-16">
			<div class="pointer-events-auto max-w-full">
				<NavigationMenu.Root>
					<NavigationMenu.List></NavigationMenu.List>
				</NavigationMenu.Root>
			</div>
		</div>
	</div>
</header>
