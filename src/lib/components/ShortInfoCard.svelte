<script lang="ts">
	import * as Card from '#lib/components/ui/card/index.js';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<Card.Root class="w-96 rounded-4xl bg-card/30">
	<Card.Content class="flex flex-col items-center">
		{@render children()}
	</Card.Content>
</Card.Root>
