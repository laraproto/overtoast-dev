<script lang="ts">
    import overtoastlogo from '#lib/assets/overtoastlogo.svg';
</script>

<footer class="relative mt-auto bg-background px-4 py-12 lg:px-10 lg:py-16">
	<div class="absolute inset-0 opacity-5"></div>
	<div class="relative z-10 mx-auto w-11/12">
		<div class="flex flex-col items-center justify-between gap-y-8 lg:flex-row lg:items-start">
			<div class="flex flex-col items-center lg:items-start">
			<span class="flex items-center gap-2 self-center font-medium text-center">
				<div class="flex size-10 items-center justify-center rounded-md text-primary-foreground">
						<img src={overtoastlogo} alt="logo" class="size-16" />
				</div>
				Overtoast
			</span>

			</div>
			<div class="flex flex-col items-center gap-y-4 lg:items-end"></div>
		</div>
	</div>
</footer>
