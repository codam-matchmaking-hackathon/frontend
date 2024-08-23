<script lang="ts">
	import CompanyRow from '$components/CompanyRow.svelte';
	import type { PageData } from './$types';
	import UserRow from '$components/UserRow.svelte';
	import { Lock, ArrowLeft } from 'lucide-svelte';
	export let data: PageData;
</script>

<div class="mb-2.5 flex justify-around">
	<button
		on:click={() => history.back()}
		class="flex items-center gap-1 rounded-lg bg-gray-300 px-4 py-2 font-bold text-gray-700 hover:bg-gray-400 hover:text-gray-900"
	>
		<ArrowLeft class="inline-block h-4 w-4" /> Back
	</button>
	<h1 class="text-3xl font-semibold text-gray-800 dark:text-gray-200">
		{data.eventDetails[0].name} ({data.eventDetails[0].date})
	</h1>
	<button
		class="flex items-center gap-1 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
	>
		<Lock class="inline-block h-4 w-4" />
		Lock event
	</button>
</div>

<div class="flex gap-2.5">
	{#if data.userForms.length > 0}
		<div>
			<h2 class="mb-3 text-2xl font-semibold text-gray-800 dark:text-gray-200">User submissions</h2>
			<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table class="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
					<thead
						class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
					>
						<tr>
							<th scope="col" class="px-6 py-3"> Name </th>
							<th scope="col" class="px-6 py-3"> Level </th>
							<th scope="col" class="px-6 py-3"> Pitch </th>
							<th scope="col" class="px-6 py-3"> Company list </th>
							<th scope="col" class="px-6 py-3">
								<span class="sr-only">Edit</span>
							</th>
						</tr>
					</thead>
					<tbody>
						{#each data.userForms as userForm}
							<UserRow {userForm} />
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	{:else}
		<div class="w-1/2 rounded-md bg-gray-200 p-4 text-center dark:bg-gray-800">
			<p class="text-gray-800 dark:text-gray-200">No user submissions yet</p>
		</div>
	{/if}
	{#if data.companyForms.length > 0}
		<div>
			<h2 class="mb-3 text-2xl font-semibold text-gray-800 dark:text-gray-200">
				Company submissions
			</h2>
			<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table class="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
					<thead
						class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
					>
						<tr>
							<th scope="col" class="px-6 py-3"> Name </th>
							<th scope="col" class="px-6 py-3"> Description </th>
							<th scope="col" class="px-6 py-3"> Participating </th>
							<th scope="col" class="px-6 py-3"> Tech stack </th>
							<th scope="col" class="px-6 py-3">
								<span class="sr-only">Edit</span>
							</th>
						</tr>
					</thead>
					<tbody>
						{#each data.companyForms as companyForm}
							<CompanyRow {companyForm} />
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	{:else}
		<div class="w-1/2 rounded-md bg-gray-200 p-4 text-center dark:bg-gray-800">
			<p class="text-gray-800 dark:text-gray-200">No company submissions yet</p>
		</div>
	{/if}
</div>

<div class="mt-5 flex justify-around">
	<button class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
		SushSort
	</button>
</div>
