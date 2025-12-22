// A rota secreta
// Se você tá vendo isso, parabéns por fuçar o código

export default async function journeySecret(fastify) {
  fastify.get('/api/journey/me', async (request, reply) => {
    return {
      me: `😌 Então… você achou a rota secreta.
  
Isso aqui é só um recado meu pra você, que gosta de fuçar código e ver o que tem por trás das coisas.

A ideia da API Journeys é juntar 32 funções diferentes dentro do mesmo projeto, de tudo um pouco. Por enquanto ela tem só 3 rotas, e nada muito avançado ainda.

Isso faz parte do processo. O projeto tá em construção, crescendo aos poucos, e muita coisa ainda vai mudar.

🙂‍↔️ Se você chegou até aqui, é porque foi além do básico. E é exatamente esse tipo de curiosidade que esse projeto espera.

Me chama no discord pra gente conversar e você me dizer oque achou da API: https://discord.gg/qT6tkubyUJ`
    }
  })
}
