import fastify from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'
import { env } from './env'

const app = fastify()

// http://localhost:3333/hello
app.get('/hello', async () => {
  const transactions = await knex('transactions')
    .select('*')
    .where('amont', 100)

  return transactions
})
app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP SERVER RUNNING')
  })
