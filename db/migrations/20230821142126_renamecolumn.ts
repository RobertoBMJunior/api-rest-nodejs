import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('transactions', (table) => {
    table.renameColumn('amont', 'amount')
  })
}

export async function down(knex: Knex): Promise<void> {}
