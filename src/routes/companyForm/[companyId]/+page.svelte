<script lang="ts">
	import { page } from '$app/stores';
	import FormError from '$components/FormError.svelte';
	import { superForm } from 'sveltekit-superforms';
	import SuperDebug from 'sveltekit-superforms';
	import { ArrowLeft } from 'lucide-svelte';

	export let data;

	const { form, errors, enhance } = superForm(data.form);
</script>

<h1>test company form {data.params.companyId}</h1>

<br />
<div class="flex justify-around">
	<button
		on:click={() => history.back()}
		class="flex items-center gap-1 rounded-lg bg-gray-300 px-4 py-2 font-bold text-gray-700 hover:bg-gray-400 hover:text-gray-900"
	>
		<ArrowLeft class="inline-block h-4 w-4" /> Back
	</button>
</div>

<p>Company Formfield</p>

<SuperDebug data={$form} />

<!-- Sveltekit Superform -->

<form method="POST" class="mt-5 flex flex-col" use:enhance>
	<label class="text-white-700 mb-2 block text-sm font-bold" for="companyName">Company Name</label>
	<input
		class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
		type="text"
		name="Company name"
		bind:value={$form.name}
	/>
	<FormError error={$errors.name} />

	<label class="text-white-700 mb-2 block text-sm font-bold" for="companyDescription"
		>Company Description</label
	>
	<textarea
		class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
		name="Company Description"
		bind:value={$form.description}
	></textarea>
	<FormError error={$errors.description} />

	<label class="text-white-700 mb-2 block text-sm font-bold" for="Tech stack">Tech stack</label>
	<input
		class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
		type="text"
		name="Tech stack"
		bind:value={$form.tech_stack}
	/>
	<FormError error={$errors.tech_stack} />

	<label class="text-white-700 mb-2 block text-sm font-bold" for="Employee name"
		>Employee name</label
	>
	<input
		class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
		type="text"
		name="Employee name"
		bind:value={$form.emp_name}
	/>
	<FormError error={$errors.emp_name} />

	<label class="text-white-700 mb-2 block text-sm font-bold" for="email">Email</label>
	<input
		class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
		type="email"
		name="email"
		bind:value={$form.emp_email}
	/>
	<FormError error={$errors.emp_email} />

	<label class="text-white-700 mb-2 block text-sm font-bold" for="phoneNumber">Phone Number</label>
	<input
		class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
		type="tel"
		name="Phone Number"
		bind:value={$form.emp_phone}
	/>
	<FormError error={$errors.emp_phone} />

	<div class="mb-4"></div>

	<div>
		<button
			class="rounded border-2"
			style="border-color: #3ba2d7; background-color: #3ba2d7; color: white; padding: 10px 10px;"
			>Submit</button
		>
	</div>
</form>

<!-- Form variables:

	id: text('id').primaryKey().$defaultFn(() => createId()),
	accepted: boolean('accepted').notNull().default(false),
	name: text('name').notNull(),
	description: text('description').notNull(),
	tech_stack: text('tech_stack').notNull(),


	// comapny employee details
	emp_name: text('emp_name').notNull(),
	emp_email: text('emp_email').notNull(),
	emp_phone: text('emp_phone').notNull(),

	// reference an event
	event_id: text('event_id').notNull().references(() => event.id),




-->
