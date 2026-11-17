<script>
	import overtoastlogo from '#lib/assets/overtoastlogo.svg';
	import Head from '#lib/components/Head.svelte';
	import ShortInfoCard from '#lib/components/ShortInfoCard.svelte';
	import incorded from '#lib/assets/incorded.avif';
</script>

<Head title="Home" />

<div class="flex flex-1 flex-col">
	<div
		id="hero"
		class="flex flex-col items-center justify-center gap-4 pt-4 pb-8 md:flex-row md:gap-x-24"
	>
		<img src={overtoastlogo} alt="Overtoast Logo" />
		<h1 class="text-center font-title text-6xl font-semibold md:w-96 md:tracking-widest">
			Overtoast Interactive
		</h1>
	</div>
	<div
		class="flex flex-col items-center justify-center gap-4 gap-x-8 bg-linear-to-b from-background via-[#721E2C] to-secondary md:flex-row"
	>
		<ShortInfoCard>
			<img src={incorded} alt="Random Incorded Sketch" class="w-40 pb-8" />
			<p class="flex flex-col">
				<span>incorded.</span>
				<br />
				<span>Current in-progress project, there's not much to say about it </span>
			</p>
		</ShortInfoCard>
	</div>
	<div
		class="flex min-h-screen flex-1 flex-col items-center justify-center bg-secondary text-center"
	>
		<h1 class="text-5xl font-extrabold">Team</h1>
		<p>I'm too lazy to set this up right now - Lara</p>
	</div>
</div>
