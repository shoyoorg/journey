// API Journeys - entry point
// Carrega o Fastify e bota tudo pra rodar

import Fastify from 'fastify'
import journeyBooks from './routers/journey-books.js'
import journeyCuriosities from './routers/journey-curiosities.js'
import journeySecret from './routers/journey-secret.js'

const fastify = Fastify({
  logger: true
})

// Registra as rotas
fastify.register(journeyBooks)
fastify.register(journeyCuriosities)
fastify.register(journeySecret)

// Inicia a aplicação
const start = async () => {
  try {
    // Na Vercel isso não é usado, mas localmente a gente precisa disso
    await fastify.listen({ port: 3000, host: '0.0.0.0' })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  start()
}

export default fastify
