//npm run start2 es un script me permite usar nodemon para no estar reiniciando el servr, el script est en index.js
const path = require ('path');
const express = require('express');
const mongoose = require('mongoose')
const app = express();


mongoose.connect('mongodb+srv://prog_web:missiontic2021@cluster0.sijwf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
//const createUserController = require('./controllers/createUser');
//const expressEdge = require('express-edge');
//const createUserController = require('./controllers/storeUserController')

//le indica a express que la carpeta con los assets sera public
app.use(express.static('public'))
//app.use(expressEdge)
//app.set('views', `${__dirname}/views`);

// request y response 

app.get('/',(req,res) =>{
    res.sendfile(path.resolve(__dirname,'pages/index.html'))
})
app.get('/index.html',(req,res) =>{
    res.sendfile(path.resolve(__dirname,'pages/index.html'))
})

app.get('/Nosotros.html',(req,res) =>{
    res.sendfile(path.resolve(__dirname,'pages/Nosotros.html'))
})

app.get('/login.html',(req,res) =>{
    res.sendfile(path.resolve(__dirname,'pages/login.html'))
})
app.get('/registro.html',(req,res) =>{
    res.sendfile(path.resolve(__dirname,'pages/registro.html'))
})
app.get('/contacto.html',(req,res) =>{
    res.sendfile(path.resolve(__dirname,'pages/contacto.html'))
})

//app.post('/registro.html',storeUserController);

app.listen(4000,()=>{
    console.log('app listening on port 4000')
})