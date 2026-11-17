<script lang="ts">
	import Navbar from '#lib/components/Navbar.svelte';
	import Footer from '#lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div class="flex h-screen flex-col overflow-hidden [--header-height:calc(--spacing(14))]">
	<Navbar />
	<main class="flex min-h-0 flex-1 flex-col overflow-y-auto">
		{@render children?.()}
		<Footer />
	</main>
</div>
