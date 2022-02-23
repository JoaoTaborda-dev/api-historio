const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const historico = []

app.post('/historico', (req, res) => {
  const url = req.body.url
  const data = req.body.data
  if (!url || !data) {
    res.status(400).send(
      JSON.stringify({
        mensagem:
          'Os campos "url" e "dataDeAcesso" são obrigatórios e não podem estar vazios!'
      })
    )
  }

  historico.push(req.body)
  res.status(201).send(JSON.stringify(historico))
})

app.get('/historico', (req, res) => {
  res.status(201).send(JSON.stringify(historico))
})

app.listen(3003, () => console.log('A api está rodando'))
