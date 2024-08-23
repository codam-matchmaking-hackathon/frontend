<script lang="ts">
	import type { EventRow } from '$lib/server/db/schema';

	export let event: EventRow;
</script>

<div class="flex justify-between gap-4 rounded-lg bg-gray-500 p-5">
	<div>
		<h2 class="text-lg font-bold">{event.name}</h2>
		<p class="mt-2">{event.date}</p>
	</div>
	<div class="mt-4 flex flex-col">
		<a
			href="/event/{event.id}"
			class="rounded bg-codam-orange px-4 py-2 font-bold text-white hover:bg-codam-orange"
			>Event details</a
		>
	</div>
</div>
