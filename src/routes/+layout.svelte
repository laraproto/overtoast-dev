<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/overtoastlogo.svg';
	import { ModeWatcher } from 'mode-watcher';
	import Head from '$lib/components/Head.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<ModeWatcher />

<Head title="Home" />

<div class="flex h-screen flex-col overflow-hidden [--header-height:calc(--spacing(14))]">
	<Navbar />
	<div class="flex flex-1 flex-col overflow-y-auto">
		{@render children?.()}
	</div>
</div>
