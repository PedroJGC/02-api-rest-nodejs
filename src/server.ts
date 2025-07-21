import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

app.register(transactionsRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    // biome-ignore lint/suspicious/noConsole: ignore
    console.log('HTTP Server Running!')
  })
