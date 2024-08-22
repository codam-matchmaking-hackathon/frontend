import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { userForm, userFormInsert } from '$lib/server/db/schema';
import { message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db';

export const load = (async () => {
	const form = await superValidate(zod(userFormInsert));

	return { form };
});

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(userFormInsert));
		console.log(form);

		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form });
		}

		// TODO: Do something with the validated form.data
		await db.insert(userForm).values(form.data);
		// Display a success status message
		return message(form, 'Form posted successfully!');
	}
};
