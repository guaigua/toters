const express = require('express')
const courses = require('./routes/courses');
const app = express()
app.set('view engine', 'ejs')


const cors = require("cors")
app.use(cors())
app.use(express.json())
app.use('/courses', courses);




app.listen(8080, () => {
  console.log('Iniciando o ExpressJS na porta 8080')
})
