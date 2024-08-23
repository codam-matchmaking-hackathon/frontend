<script lang="ts">
	import type { CompanyFormRow } from '$lib/server/db/schema';

	export let companyForm: CompanyFormRow;
</script>

<tr
	class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
>
	<th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
		>{companyForm.name}</th
	>
	<td class="px-6 py-4">{companyForm.description}</td>
	<td class="px-6 py-4">{companyForm.accepted ? 'Accepted' : 'Pending'}</td>
	<td class="px-6 py-4">{companyForm.tech_stack}</td>
	<td class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
		<a href="/companyForm/{companyForm.id}" class="text-indigo-600 hover:text-indigo-900">Edit</a>
	</td>
</tr>
