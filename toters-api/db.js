const { Sequelize, DataTypes } = require('sequelize')

const Task = require('./models/todolists')

const Student = require('./models/students')

const sequelize = new Sequelize({ dialect: 'sqlite', storage: './toters.db' })

const tasks = Task(sequelize, DataTypes)

const students = Student(sequelize, DataTypes)

// sequelize.sync({ force: false }) 
// .then(() => {
//     console.log ('Tabelas Atualizadas'.bgGreen.black)
// })

module.exports ={
    tasks,
    students    
}







