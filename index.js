//npm run start2 es un script me permite usar nodemon para no estar reiniciando el servr, el script est en index.js
const path = require ('path')
const express = require('express')
const app = new express()

//le indica a express que la carpeta con los assets sera public
app.use(express.static('public'))


// request y response 

app.get('/',(req,res) =>{
    res.sendfile(path.resolve(__dirname,'dist/index.html'))
})
