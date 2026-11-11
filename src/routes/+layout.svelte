<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/overtoastlogo.svg';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '#lib/components/ui/sonner/index.js';
	import { getFlash } from 'sveltekit-flash-message';
	import { page } from '$app/state';
	import { toast } from 'svelte-sonner';
	import { onNavigate } from '$app/navigation';

	let { children } = $props();

	const flash = getFlash(page);

	onNavigate((navigation) => {
		if (navigation.shallow && navigation.type === 'goto') return;
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	$effect(() => {
		if (!$flash) return;

		if ($flash.type === 'success') {
			toast.success($flash.message);
		} else if ($flash.type === 'error') {
			toast.error($flash.message);
		} else if ($flash.type === 'info') {
			toast($flash.message);
		}

		// Clear the flash message to avoid double-toasting.
		$flash = undefined;
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<ModeWatcher />
<Toaster />

{@render children?.()}
