<script>
	import Event from '$components/Event.svelte';

	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#if data.events}
		<div class="grid grid-cols-2 grid-rows-2 gap-2">
			{#each data.events as event}
				<Event {event} />
			{/each}
		</div>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
