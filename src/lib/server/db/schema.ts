import { pgTable, serial, text, integer, date, boolean } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';
import { createId } from '@paralleldrive/cuid2';

export const event = pgTable('event', {
	id: text('id').primaryKey().$defaultFn(() => createId()),
	name: text('name').notNull(),
	date: date('date').notNull(),
});

export const EventSelect = createSelectSchema(event, {
	id: z.string().min(1).max(255),
	name: z.string().min(1).max(255),
	date: z.string().min(1).max(255),
});

export type EventRow = z.infer<typeof EventSelect>;

export const userForm = pgTable('user', {
	id: text('id').primaryKey().$defaultFn(() => createId()),
	firstName: text('name').notNull(),
	lastName: text('last_name').notNull(),
	student_id: text('student_id').notNull(),
	level: integer('level').notNull(),
	pitch: text('pitch').notNull(),
	company_list: text('company_list').notNull().default(sql`ARRAY[]::text[]`),

	// reference an event
	event_id: text('event_id').notNull().references(() => event.id),
});

export const userFormInsert = createInsertSchema(userForm, {
	level: z.number().int().min(0).max(20).default(1),
	firstName: z.string().min(1).max(255),
	lastName: z.string().min(1).max(255),
	student_id: z.string().min(1).max(255),
	pitch: z.string().min(1).max(255),
});

export const UserFormSelect = createSelectSchema(userForm);

export type UserFormRow = z.infer<typeof UserFormSelect>;

export const companyForm = pgTable('company', {
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
});

export const companyFormInsert = createInsertSchema(companyForm, {
	accepted: z.boolean().default(false),
	name: z.string().min(1).max(255),
	description: z.string().min(1).max(255),
	tech_stack: z.string().min(1).max(255),
	emp_name: z.string().min(1).max(255),
	emp_email: z.string().min(1).max(255),
	emp_phone: z.string().min(1).max(255),
});

export const CompanyFormSelect = createSelectSchema(companyForm);

export type CompanyFormRow = z.infer<typeof CompanyFormSelect>;
