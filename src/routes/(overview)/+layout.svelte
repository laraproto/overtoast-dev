<script lang="ts">
	import Navbar from '#lib/components/Navbar.svelte';
	import Footer from '#lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col overflow-hidden [--header-height:calc(--spacing(14))]">
	<Navbar />
	<main class="flex flex-1 flex-col overflow-hidden">
		{@render children?.()}
	</main>
	<Footer />
</div>
