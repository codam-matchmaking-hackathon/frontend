import { db } from '$lib/server/db';
import { companyForm, event, userForm } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const userForms = await db.select().from(userForm).where(eq(userForm.event_id, params.slug));
	const companyForms = await db.select().from(companyForm).where(eq(companyForm.event_id, params.slug));
	const eventDetails = await db.select().from(event).where(eq(event.id, params.slug));

	return { userForms, companyForms, eventDetails };
}) satisfies PageServerLoad;
