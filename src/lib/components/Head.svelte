<script lang="ts">
	interface HeadProps {
		title: string;
		ogTitle?: string;
		ogDescription?: string;
		ogImage?: string;
		ogUrl?: string;
		articleAuthor?: string;
	}

	let { title, ogTitle, ogDescription, ogImage, ogUrl, articleAuthor }: HeadProps = $props();

	let titleProc = $derived(`${title} | Overtoast`);
	let ogTitleProc = $derived(ogTitle ?? titleProc);
</script>

<svelte:head>
	<meta property="og:title" content={ogTitleProc} />
	{#if ogDescription}
		<meta property="og:description" content={ogDescription} />
	{/if}
	{#if ogImage}
		<meta property="og:image" content={ogImage} />
	{/if}
	{#if ogUrl}
		<meta property="og:url" content={ogUrl} />
	{/if}
	{#if articleAuthor}
		<meta property="article:author" content={articleAuthor} />
	{/if}
	<title>{titleProc}</title>
</svelte:head>
