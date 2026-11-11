<script>
	import overtoastlogo from '#lib/assets/overtoastlogo.svg';
	import Head from '#lib/components/Head.svelte';
	import * as Card from '#lib/components/ui/card/index.js';
</script>

<Head title="Home" />

{#snippet card()}
	<Card.Root class="w-96 rounded-4xl bg-card/30">
		<Card.Content class="flex flex-col items-center">
			<img src="https://placehold.co/160x160" alt="Card Placeholder" class="w-40 pb-8" />
			<p class="flex flex-col">
				<span>Title</span>
				<br />
				<span
					>Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or
					even a very very short story.
				</span>
			</p>
		</Card.Content>
	</Card.Root>
{/snippet}

<div class="flex flex-1 flex-col">
	<div class="flex flex-col items-center justify-center gap-4 pt-4 pb-8 md:flex-row md:gap-x-24">
		<img src={overtoastlogo} alt="Overtoast Logo" />
		<h1 class="text-center font-title text-6xl font-semibold md:w-96 md:tracking-widest">
			Overtoast Interactive
		</h1>
	</div>
	<div
		class="flex flex-col items-center justify-center gap-4 gap-x-8 bg-linear-to-b from-background via-[#721E2C] to-secondary md:flex-row"
	>
		{@render card()}
		{@render card()}
		{@render card()}
	</div>
	<div class="flex-1 items-center justify-center bg-secondary"></div>
</div>
