const express = require('express')
const router = express.Router()

const authControllers = require('../controlllers/authControllers')
//router para las vistas
router.get('/',(req, res)=>{
    res.render('index')
})

router.get('/login',(req, res)=>{
    res.render('login')
})

router.get('/register',(req, res)=>{
    res.render('register')
})


//controller

router.post('/register', authControllers.register) 

router.post('/login', authControllers.login)

module.exports= router