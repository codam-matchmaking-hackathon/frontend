<script lang="ts">
	export let error: string[] | undefined;
</script>

{#if error}
	<p class="my-1 rounded-lg bg-red-600 p-2 text-white">{error}</p>
{/if}
