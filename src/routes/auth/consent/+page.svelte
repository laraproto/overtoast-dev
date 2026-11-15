<script lang="ts">
	import { Button } from '#lib/components/ui/button/index.js';
	import * as Card from '#lib/components/ui/card/index.js';
	import * as Collapsible from '#lib/components/ui/collapsible/index.js';
	import Head from '#lib/components/Head.svelte';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { enhance } from '$app/forms';

	let { data } = $props();
</script>

<Head title={`Authorize ${data.oauthClient?.client_name}`} />

<div class="flex flex-col gap-6">
	<Card.Root>
		<Card.Header class="text-center">
			<Card.Title class="text-2xl font-bold"
				>Continue to {data.oauthClient?.client_name}?</Card.Title
			>
			<Card.Description class="text-sm text-balance text-muted-foreground"
				>Authorize {data.oauthClient?.client_name} to access your account?</Card.Description
			>
		</Card.Header>
		<Card.Content>
			<Collapsible.Root class="rounded-md bg-input/20 data-[state=open]:bg-muted">
				<Collapsible.Trigger
					>{#snippet child({ props })}
						<Button {...props} variant="ghost" class="group w-full">
							What data will be shared
							<ChevronDownIcon class="ml-auto group-data-[state=open]:rotate-180" />
						</Button>
					{/snippet}</Collapsible.Trigger
				>
				<Collapsible.Content class="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
					<div>This panel can be expanded or collapsed to reveal additional content.</div>
					<Button size="xs">Learn More</Button>
				</Collapsible.Content>
			</Collapsible.Root>
		</Card.Content>
		<Card.Footer class="flex flex-row justify-center gap-2">
			<span class="flex flex-row gap-2 pt-6">
				<form method="post" use:enhance>
					<Button variant="outline" type="submit" size="sm" formaction="?/reject">Deny</Button>
					<Button variant="default" type="submit" size="sm" formaction="?/accept">Authorize</Button>
				</form>
			</span>
		</Card.Footer>
	</Card.Root>
	<!-- <FieldDescription class="px-6 text-center">
		By clicking continue, you agree to our <a href="##">Terms of Service</a>
		and <a href="##">Privacy Policy</a>.
	</FieldDescription> -->
</div>
