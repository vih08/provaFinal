//iniciei projeto na pasta vazia e depois começei a base 

const express = require('express')
const PORTA = 8000

// passo 1 o registro do log
function registrarLog(nomeAluno){
  const idUnico = uuidv4()
  const dataHora = new Date().toLocaleString
  const mensagem = `${idUnico} - ${dataHora} - ${nomeAluno}\``


  fs.appendFileSync("log registrado")
  return idUnico
}

//passo 2 o express
const express = require("express")
const app = express()

app.use(express.json())


//passo 3
const PORT = 8000
app.listen(PORT, ()=>{
  console.log(`é pra estar rodando na porta ${8000}`)
})
//passo 4
app.post('/logs', (req,res)=>{
  const{nomeAluno}=req.body

  if(!nomeAluno){
    return res.status(400).json({erro:"nome do aluno é obrigatorio por"})
  }const idGerado = registrarLog(nome)
  res.json({id:idGerado, mensagem:"log gerado (eu espero na vdd)"})
})

//passo 5

const fs = require("fs")

app.get("/logs/:id", (req, res) =>{
  const idBuscando = req.params.id
if (logEncontrado){
  res.json({mensagem: logEncontrado })
}else {
  res.status(404).json({erro:"log não encontrado"})
}
})
