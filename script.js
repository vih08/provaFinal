const express = require('express')
const PORTA = 8000

function registrarLog(nomeAluno){
  const idUnico = uuidv4()
  const dataHora = new Date().toLocaleString
  const mensagem = `${idUnico} - ${dataHora} - ${nomeAluno}\``


  fs.appendFileSync("log registrado")
  return idUnico
}

const express = require("express")
const app = express()

app.use(express.json())

const PORT = 8000
app.listen(PORT, ()=>{
  console.log(`é pra estar rodando na porta ${8000}`)
})


