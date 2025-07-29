import { app } from './app'
import { env } from './env'

app
  .listen({
    port: env.PORT,
    host: '0.0.0.0',
  })
  .then(() => {
    // biome-ignore lint/suspicious/noConsole: ignore
    console.log('HTTP Server Running!')
  })
