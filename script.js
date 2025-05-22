const express = require('express')
const PORTA = 8000

function registrarLog(nomeAluno){
  const idUnico = uuidv4()
  const dataHora = new Date().toLocaleString
  const mensagem = `${idUnico} - ${dataHora} - ${nomeAluno}\``


  fs.appendFileSync("log registrado")
  return idUnico
}
