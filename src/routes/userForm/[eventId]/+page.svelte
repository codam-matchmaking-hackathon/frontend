<script lang="ts">
	import { page } from '$app/stores';
	import FormError from '$components/FormError.svelte';
	import { superForm } from 'sveltekit-superforms';
	import SuperDebug from 'sveltekit-superforms';
	import { ArrowLeft } from 'lucide-svelte';
	export let data;

	const { form, errors, enhance } = superForm(data.form);
	$form.company_list = ['42', 'WeThinkCode', 'Wethinkcode_'].toString();
</script>

<div class="flex justify-around">
	<button
		on:click={() => history.back()}
		class="flex items-center gap-1 rounded-lg bg-gray-300 px-4 py-2 font-bold text-gray-700 hover:bg-gray-400 hover:text-gray-900"
	>
		<ArrowLeft class="inline-block h-4 w-4" /> Back
	</button>
	<h1 class="text-2xl font-bold">User form</h1>
	<div></div>
</div>

<SuperDebug data={$form} />

<form method="POST" class="mt-5 flex flex-col" use:enhance>
	<label class="mb-2 block text-sm font-bold text-gray-700" for="firstName">First name</label>
	<input
		class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
		type="text"
		name="firstName"
		bind:value={$form.firstName}
	/>
	<FormError error={$errors.firstName} />

	<label class="mb-2 block text-sm font-bold text-gray-700" for="lastName">Last name</label>
	<input
		class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
		type="text"
		name="lastName"
		bind:value={$form.lastName}
	/>
	<FormError error={$errors.lastName} />

	<label class="mb-2 block text-sm font-bold text-gray-700" for="level">Intra level</label>
	<input
		class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
		type="number"
		name="level"
		bind:value={$form.level}
	/>
	<FormError error={$errors.level} />

	<label class="mb-2 block text-sm font-bold text-gray-700" for="student_id">Intra username</label>
	<input
		class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
		type="text"
		name="student_id"
		bind:value={$form.student_id}
	/>
	<FormError error={$errors.student_id} />

	<label class="mb-2 block text-sm font-bold text-gray-700" for="pitch">One line pitch</label>
	<input
		class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
		type="text"
		name="pitch"
		bind:value={$form.pitch}
	/>
	<FormError error={$errors.pitch} />

	<input type="hidden" name="company_list" value={$form.company_list} />
	<input type="hidden" name="event_id" value={$page.params.eventId} />

	<!-- <CompanySelect companyList="test,test2,test3,test4" /> -->

	<div><button>Submit</button></div>
</form>
