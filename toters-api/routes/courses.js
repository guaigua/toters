var express = require('express');
var router = express.Router();

const { tasks } = require('../db');

// List tasks 
router.get('/tasks', async (req, res) => {
    const taskList =  await tasks.findAll();
    res.json({ action: 'Show Tasks ', tasks: taskList })
})

// Show task for ID
router.get('/tasks/:id', async  (req, res) => {
    const taskId = req.params.id
    const taskList =  await tasks.findByPk(taskId);
    res.json({ action: 'Show Task for ID ', tasks: taskList })
})

// Create one task
router.post('/tasks', async (req, res) => { 
    var errors=[]
    if (!req.body.description){
        errors.push("Descrição não enviada");
    }
    if (!req.body.ready){
        errors.push("Status não enviada");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    const tasksCreate = await tasks.create({             
        description: req.body.description,
        ready: req.body.ready
    })

    console.log(tasksCreate);
 
    res.json({ action: 'Task Create ', tasksCreate})
})

// update one task

router.put('/tasks/:id', async (req, res) =>{
    try{
        const taskId = req.params.id
        const body = req.body
        const taskList = await tasks.findByPk(taskId)
        taskList.update({
            description: body.description,
            ready: body.ready
        });        
        res.send({ action: 'Task Modify ', taskList:taskList })
    } catch (e) {
        console.log(e);
        return res.send({ error: e})
    }
})

// delete one task
router.delete('/tasks/:id', async (req, res) => {
    try{
        const taskId = req.params.id
        const taskRemove = await tasks.destroy({ where: { id: taskId  } })
        res.send({ action: 'Task Remove ', taskRemove: taskRemove })
    } catch (e) {
        console.log(e);
        return res.send({ error: e})
    }
})

module.exports = router;