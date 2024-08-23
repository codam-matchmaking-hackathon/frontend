<script lang="ts">
	import type { EventRow } from '$lib/server/db/schema';

	export let event: EventRow;
</script>

<div class="rounded-lg bg-gray-500 p-5">
	<h2 class="text-lg font-bold">{event.name}</h2>
	<p class="mt-2">Date: {event.date}</p>
	<div class="flex justify-end mt-4">
		<a
			href="/event/{event.id}"
			class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">Event details</a
		>
		<a
			href="/userForm/{event.id}"
			class="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 ml-2">Form</a
		>
	</div>
</div>
