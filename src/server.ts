import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'hello fastify'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    // biome-ignore lint/suspicious/noConsole: ignore
    console.log('HTTP Server Running!')
  })
