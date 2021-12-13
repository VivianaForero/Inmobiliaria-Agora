const mongoose = require ('mongoose');

let TareaSchema = new mongoose.Schema({
    idTarea:Number,
    nombreTarea :String,
    detallerTarea:String
});

module.exports = mongoose,model('tarea',TareaSchema,'Tareas');