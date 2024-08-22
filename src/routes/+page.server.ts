import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { event } from '$lib/server/db/schema';

export const load = (async () => {
	const events = await db.select().from(event).orderBy(event.date);
	if (!events) {
		return { status: 404 };
	}
	return { events };
}) satisfies PageServerLoad;
