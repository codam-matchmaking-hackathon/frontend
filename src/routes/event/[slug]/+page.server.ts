import { db } from '$lib/server/db';
import { event, userForm } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {

	return { params };
}) satisfies PageServerLoad;
