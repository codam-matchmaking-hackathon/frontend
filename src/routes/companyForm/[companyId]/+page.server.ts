import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { companyForm, companyFormInsert } from '$lib/server/db/schema';
import { message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';



export const load = (async ({ params }) => {
	const form = await superValidate(zod(companyFormInsert));
	return { form, params };
});

export const actions = {
	default: async ({ request, params }) => {
		const form = await superValidate(request, zod(companyFormInsert));
		console.log(form);

		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form });
		}

		// TODO: Do something with the validated form.data
		await db.insert(companyForm).values({ ...form.data, event_id: params.eventId });
		// Display a success status message
		return message(form, 'Form posted successfully!');
	}
};
