import { app } from './app'
import { env } from './env'

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    // biome-ignore lint/suspicious/noConsole: ignore
    console.log('HTTP Server Running!')
  })
