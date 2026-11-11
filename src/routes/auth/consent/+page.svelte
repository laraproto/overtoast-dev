<script lang="ts">
	import { Button } from '#lib/components/ui/button/index.js';
	import * as Card from '#lib/components/ui/card/index.js';
	import { authConsent as authConsentCommand } from '#lib/auth.remote.js';

	let { data } = $props();

	const authConsent = async (params: { consent: boolean }) => {
		try {
			await authConsentCommand(params);
		} catch (err) {
			console.error(err);
		}
	};
</script>

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
		<Card.Content>Requested scopes go here</Card.Content>
		<Card.Footer class="flex flex-row justify-center gap-2">
			<span class="flex flex-row gap-2 pt-6">
				<Button variant="outline" size="sm" onclick={() => authConsent({ consent: false })}
					>Deny</Button
				>
				<Button variant="default" size="sm" onclick={() => authConsent({ consent: true })}
					>Authorize</Button
				>
			</span>
		</Card.Footer>
	</Card.Root>
	<!-- <FieldDescription class="px-6 text-center">
		By clicking continue, you agree to our <a href="##">Terms of Service</a>
		and <a href="##">Privacy Policy</a>.
	</FieldDescription> -->
</div>
