/** biome-ignore-all lint/suspicious/useAwait: ignore */
import type { FastifyReply, FastifyRequest } from 'fastify'

export async function checkSessionIdExists(
  request: FastifyRequest,
  replay: FastifyReply
) {
  const sessionId = request.cookies.sessionId

  if (!sessionId) {
    return replay.status(401).send({
      error: 'Unauthorized.',
    })
  }
}
