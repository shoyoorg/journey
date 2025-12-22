// Router de livros
// Carrega os dados e expõe a rota /api/journey/books

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default async function journeyBooks(fastify) {
  // Pega o JSON dos livros
  const booksData = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../jsons/books.json'), 'utf-8')
  )

  // Rota que retorna os livros
  fastify.get('/api/journey/books', async (request, reply) => {
    return { books: booksData }
  })
}
