import { pgTable, serial, text, integer, date } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	student_id: text('student_id').notNull(),
});

export const event = pgTable('event', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	date: date('date').notNull(),
});

export const company = pgTable('company', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	description: text('description').notNull(),
	tech_stack: text('tech_stack').notNull(),


	// comapny employee details
	emp_name: text('emp_name').notNull(),
	emp_email: text('emp_email').notNull(),
	emp_phone: text('emp_phone').notNull(),
});
