var express = require('express');
var router = express.Router();

const { courses } = require('../db');

// List courses
router.get('/courses', async (req, res) => {
    const coursesList =  await courses.findAll();
    res.json({ action: 'Show Courses ', courses: coursesList })
})

// Show courses for ID
router.get('/courses/:id', async  (req, res) => {
    const coursesId = req.params.id
    const coursesList =  await courses.findByPk(coursesId);
    res.json({ action: 'Show courses for ID ', courses: coursesList })
})

// Show courses for title
router.get('/name/:name', async  (req, res) => {   
    const coursesName =  req.params.name;  
    const coursesOne = await courses.findOne({ where: { title: coursesName } });
    res.json({ action: 'Show courses for Title', courses: coursesOne })
}) 

// Create one course
router.post('/courses', async (req, res) => { 
    var errors=[]
    if (!req.body.title){
        errors.push("Nome do curso não enviado");
    }
    if (!req.body.description){
        errors.push("Descriçao não enviada");
    }
    if (!req.body.capacity){
        errors.push("Capacidade não enviada");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    }
    if (!req.body.hours){
       errors.push("Hora não enviada");
    }
  
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    const coursesCreate = await courses.create({             
        title: req.body.title,
        description: req.body.description,
        capacity: req.body.capacity,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        hours: req.body.hours,
    })


    console.log(coursesCreate);
 
    res.json({ action: 'Courses Create ', coursesCreate})
})

// update one course

router.put('/courses/:id', async (req, res) =>{
    try{
        const coursesId = req.params.id
        const body = req.body
        const coursesList = await courses.findByPk(coursesId)
        coursesList.update({
            title: body.title,
            description: body.description,
            capacity: body.capacity,
            hours: body.hours,
        });        
        res.send({ action: 'Courses Modify ', coursesList:coursesList })
    } catch (e) {
        console.log(e);
        return res.send({ error: e})
    }
})

// delete one course
router.delete('/courses/:id', async (req, res) => {
    try{
        const coursesId = req.params.id
        const coursesRemove = await courses.destroy({ where: { id: coursesId  } })
        res.send({ action: 'courses Remove ', coursesRemove: coursesRemove })
    } catch (e) {
        console.log(e);
        return res.send({ error: e})
    }
})




module.exports = router;