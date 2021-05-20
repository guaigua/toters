const express = require('express')
const todolists = require('./routes/todolists');
const students = require('./routes/students');
const teachers = require('./routes/teachers');
const courses = require('./routes/courses');


const app = express()
app.set('view engine', 'ejs')

const cors = require("cors")
app.use(cors())
// app.use(cors({
//   origin: 'http://localhost:4200/'
// }));
app.use(express.json())
app.use('/', todolists);
app.use('/students', students);
app.use('/teachers', teachers);
app.use('/courses', courses);
app.use('/uploads', express.static('./uploads'));








app.listen(8081, () => {
  console.log('Iniciando o ExpressJS na porta 8081')
})
