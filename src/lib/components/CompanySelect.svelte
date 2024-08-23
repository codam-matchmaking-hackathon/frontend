<script lang="ts">
	export let companyList: string;

	import { createSwapy } from 'swapy';

	const container = document.querySelector('.container');

	const swapy = createSwapy(container);

	swapy.onSwap((event) => {
		console.log(event.data.object);
		console.log(event.data.array);
		console.log(event.data.map);
	});
</script>

<!--
{#each companies as company}
	<option value={company}>{company}</option>
{/each} -->
