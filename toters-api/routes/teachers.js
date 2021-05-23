var express = require('express');
var router = express.Router();

const imageController = require("../controllers/image");

const { teachers } = require('../db');

// List teachers
router.get('/teachers', async (req, res) => {
    const teachersList =  await teachers.findAll();
    res.json({ action: 'Show Teachers ', teachers: teachersList })
})

// Show teachers for ID
router.get('/teachers/:id', async  (req, res) => {
    const teachersId = req.params.id
    const teachersList =  await teachers.findByPk(teachersId);
    res.json({ action: 'Show teachers for ID ', teachers: teachersList })
})

// Show teachers for Firstname
router.get('/name/', async  (req, res) => {   
    const teachersName =  req.body.name;  
    const teachersOne = await teachers.findOne({ where: { firstname: teachersName } });
    res.json({ action: 'Show teachers for Name ', teachers: teachersOne })
}) 

// Create one teacher
router.post('/teachers', imageController.uploadImg,  async (req, res) => { 
    
    var errors=[]
    if (!req.body.firstname){
        errors.push("Nome não enviado");
    }
    if (!req.body.lastname){
        errors.push("Sobrenome não enviad");
    }
    if (!req.body.mail){
        errors.push("Mail não enviada");
    }
    // if (!req.body.birth){
    //     errors.push("Data do nascimento não enviado");
    // }
    if (!req.body.country){
        errors.push("País não enviado");
    }
    // if (!req.body.urlphoto){
    //     errors.push("foto não enviado");
    // }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    const teachersCreate = await teachers.create({             
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        mail: req.body.mail,
        birth: req.body.birth,
        country: req.body.country,
        urlphoto: req.file.path
    })
 
    res.json({ action: 'Teachers Create ', teachersCreate})
})

// update one teachers

router.put('/teachers/:id', async (req, res) =>{
    try{
        const teachersId = req.params.id
        const body = req.body
        const teachersList = await teachers.findByPk(teachersId)
        teachersList.update({
            firstname: body.firstname,
            lastname: body.lastname,
            mail: body.mail,
            birth: body.birth,
            country: body.country,
            urlphoto: body.urlphoto
        });        
        res.send({ action: 'Teachers Modify ', teachersList:teachersList })
    } catch (e) {
        console.log(e);
        return res.send({ error: e})
    }
})

// delete one teacher
router.delete('/teachers/:id', async (req, res) => {
    try{
        const teachersId = req.params.id
        const teachersRemove = await teachers.destroy({ where: { id: teachersId  } })
        res.send({ action: 'teachers Remove ', teachersRemove: teachersRemove })
    } catch (e) {
        console.log(e);
        return res.send({ error: e})
    }
})




module.exports = router;