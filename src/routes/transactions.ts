/** biome-ignore-all lint/suspicious/useAwait: ignore */
import type { FastifyInstance } from 'fastify'
import { knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const transactions = await knex('transactions').select('*')

    return transactions
  })
}
