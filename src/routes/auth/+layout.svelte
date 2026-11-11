<script lang="ts">
	import overtoastlogo from '#lib/assets/overtoastlogo.svg';
	import incordedimg from '#lib/assets/incorded.avif';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();
</script>

<div
	class="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10"
	style="background-image: url({incordedimg}); background-size: cover; background-position: center;"
>
	<div class="flex w-full max-w-sm flex-col gap-6">
		<span class="flex items-center gap-2 self-center font-medium">
			<div class="flex size-10 items-center justify-center rounded-md text-primary-foreground">
				{#if data.oauthClient?.logo_uri}
					<img src={data.oauthClient.logo_uri} alt="logo" class="size-10 rounded-md" />
				{:else}
					<img src={overtoastlogo} alt="logo" class="size-16" />
				{/if}
			</div>
			{data.oauthClient?.client_name ?? 'Overtoast'}
		</span>
		<div class="flex flex-1 items-center justify-center">
			<div class="w-full max-w-xs">
				{@render children()}
			</div>
		</div>
	</div>
</div>
