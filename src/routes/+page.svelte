<script>
	import Event from '$components/Event.svelte';

	export let data;
</script>

<h1>H1 typeface</h1>
<h2>H2 typeface</h2>
<h3>H3 typeface</h3>
<p>paragraphc typeface</p>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#if data.events}
		<div class="flex flex-col gap-2">
			{#each data.events as event}
				<Event {event} />
			{/each}
		</div>
	{/if}
</section>

<div class="mt-5 flex justify-around">
	<a href="/companyForm/companyID">
		<button class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
			Company Form
		</button>
	</a>
</div>

<div class="mt-5 flex justify-around">
	<a href="/userForm/ybp4j9bs6bt5ycjgnya9eaav">
		<button class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
			User Form
		</button>
	</a>
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
