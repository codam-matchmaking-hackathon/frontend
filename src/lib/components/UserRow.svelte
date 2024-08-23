<script lang="ts">
	import type { UserFormRow } from '$lib/server/db/schema';

	export let userForm: UserFormRow;

	function format_company_list(company_list: string) {
		return company_list.split(',').join(', ');
	}
</script>

<tr
	class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
>
	<th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
		>{userForm.firstName} {userForm.lastName}</th
	>
	<td class="px-6 py-4">{userForm.level}</td>
	<td class="px-6 py-4">{userForm.pitch}</td>
	<td class="px-6 py-4">{format_company_list(userForm.company_list)}</td>
	<td class="px-6 py-4 text-right">
		<a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Edit</a>
	</td>
</tr>
