import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const transactions = await knex('transactions').select('*')

  return transactions
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    // biome-ignore lint/suspicious/noConsole: ignore
    console.log('HTTP Server Running!')
  })
