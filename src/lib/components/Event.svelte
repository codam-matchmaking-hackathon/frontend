<script lang="ts">
	import { goto } from '$app/navigation';

	export let event: {
		id: string;
		date: string;
		name: string;
	};
</script>

<div class="event">
	<h2>{event.name}</h2>
	<p>{event.date}</p>
	<button
		on:click={() => {
			goto(`/event/${event.id}`);
		}}
	>
		Event details
	</button>
</div>
