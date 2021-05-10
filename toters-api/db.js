const { Sequelize, DataTypes } = require('sequelize')

const Task = require('./models/todolists')

const Student = require('./models/students')

const Teacher = require('./models/teachers')

const Course = require('./models/courses')

const sequelize = new Sequelize({ dialect: 'sqlite', storage: './toters.db' })

const tasks = Task(sequelize, DataTypes)

const students = Student(sequelize, DataTypes)

const teachers = Teacher(sequelize, DataTypes)

const courses = Course(sequelize, DataTypes)



// sequelize.sync({ force: false }) 
// .then(() => {
//     console.log ('Tabelas Atualizadas'.bgGreen.black)
// })

module.exports ={
    tasks,
    students,
    teachers, 
    courses 
}







