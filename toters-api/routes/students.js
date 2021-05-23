var express = require('express');
var router = express.Router();

const { students } = require('../db');

// List students
router.get('/students', async (req, res) => {
    const studentsList =  await students.findAll();
    res.json({ action: 'Show Students ', students: studentsList })
})

// Show students for ID
router.get('/students/:id', async  (req, res) => {
    const studentsId = req.params.id
    const studentsList =  await students.findByPk(studentsId);
    res.json({ action: 'Show students for ID ', students: studentsList })
})

// Show students for Firstname
router.get('/name/', async  (req, res) => {   
    const studentsName =  req.body.name;  
    const studentsOne = await students.findOne({ where: { firstname: studentsName } });
    res.json({ action: 'Show students for Name ', students: studentsOne })
}) 

// Create one student
router.post('/students', async (req, res) => { 
    var errors=[]
    if (!req.body.firstname){
        errors.push("Nome não enviado");
    }
    if (!req.body.lastname){
        errors.push("Sobrenome não enviado");
    }
    if (!req.body.mail){
        errors.push("Mail não enviado");
    }
    // if (!req.body.birth){
    //     errors.push("Data do nascimento não enviado");
    // }
    if (!req.body.country){
        errors.push("País não enviada");
    }
    // if (!req.body.urlphoto){
    //     errors.push("foto não enviado");
    // }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    const studentsCreate = await students.create({             
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        mail: req.body.mail,
        birth: req.body.birth,
        country: req.body.country,
        urlphoto: req.body.urlphoto,
    })


    console.log(studentsCreate);
 
    res.json({ action: 'Students Create ', studentsCreate})
})

// update one students

router.put('/students/:id', async (req, res) =>{
    try{
        const studentsId = req.params.id
        const body = req.body
        const studentsList = await students.findByPk(studentsId)
        studentsList.update({
            firstname: body.firstname,
            lastname: body.lastname,
            mail: body.mail,
            birth: body.birth,
            country: body.country,
            urlphoto: body.urlphoto
        });        
        res.send({ action: 'Students Modify ', studentsList:studentsList })
    } catch (e) {
        console.log(e);
        return res.send({ error: e})
    }
})

// delete one students
router.delete('/students/:id', async (req, res) => {
    try{
        const studentsId = req.params.id
        const studentsRemove = await students.destroy({ where: { id: studentsId  } })
        res.send({ action: 'students Remove ', studentsRemove: studentsRemove })
    } catch (e) {
        console.log(e);
        return res.send({ error: e})
    }
})




module.exports = router;