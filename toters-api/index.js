const express = require('express')
const todolists = require('./routes/todolists');
const students = require('./routes/students');
const app = express()
app.set('view engine', 'ejs')

const cors = require("cors")
app.use(cors())
app.use(express.json())
app.use('/', todolists);
app.use('/students', students);




app.listen(8080, () => {
  console.log('Iniciando o ExpressJS na porta 8080')
})
