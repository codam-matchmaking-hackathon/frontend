import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { userForm, userFormInsert } from '$lib/server/db/schema';
import { message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';

export const load = (async ({ params }) => {
	const form = await superValidate(zod(userFormInsert));
//	const CompanyForm = await db.select().from(userForm).where(eq(userForm.event_id, params.eventId));
// ^^ voor het sorteren van de lijst van companies
	return { form, params, userForms };
});

export const actions = {
	default: async ({ request, params }) => {
		const form = await superValidate(request, zod(userFormInsert));
		console.log(form);

		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form });
		}

		// TODO: Do something with the validated form.data
		await db.insert(userForm).values({ ...form.data, event_id: params.eventId });
		// Display a success status message
		return message(form, 'Form posted successfully!');
	}
};
