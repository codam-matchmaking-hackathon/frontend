<script lang="ts">
	import FormError from '$components/FormError.svelte';
	import { superForm } from 'sveltekit-superforms';
	import SuperDebug from 'sveltekit-superforms';

	export let data;

	const { form, errors, enhance } = superForm(data.form);
	$form.company_list = ['42', 'WeThinkCode', 'Wethinkcode_'];
</script>

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

	<div><button>Submit</button></div>
</form>
