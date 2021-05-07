const { Sequelize, DataTypes } = require('sequelize')

const Task = require('./models/todolists')

const sequelize = new Sequelize({ dialect: 'sqlite', storage: './to-do-list.db' })

const tasks = Task(sequelize, DataTypes)

// sequelize.sync({ force: false }) 
// .then(() => {
//     console.log ('Tabelas Atualizadas'.bgGreen.black)
// })

module.exports ={
    tasks
}





