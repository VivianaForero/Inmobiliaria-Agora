const express = require('express');
const mongoose = require ('mongoose');
const TareaSchema = require("./modelos/Tarea.js")

const app = express();
const router = express.router();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//coneccion a  mongo db
mongoose.connect('mongodb+srv://prog_web:missiontic2021@cluster0.dod8s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

//operaciones CRUD
router.get('/',(req,res)=>{
    res.send("inicio de la api");
})
router.post('/',(req,res)=>{
    let nuevaTarea = new TareaSchema({
        idTarea: req.body.id,
        nombreTarea: req.body.nombre,
        detallerTarea: req.body.detalle
    });
    nuevaTarea.save(function(err,datos){
        if(err){
            console.log(err);
        }
        rest.send("se almaceno correctamente la tarea")
    })

})

app.use(router)
app.listen(3000,()=>{
    console.log("Hola Servidor")
});

