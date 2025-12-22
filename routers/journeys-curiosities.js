// Router de curiosidades
// Carrega os dados e expõe a rota /api/journey/curiosities

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default async function journeyCuriosities(fastify) {
  // Pega o JSON das curiosidades
  const curiositiesData = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../jsons/curiosities.json'), 'utf-8')
  )

  // Rota que retorna as curiosidades
  fastify.get('/api/journey/curiosities', async (request, reply) => {
    return { curiosities: curiositiesData }
  })
}
