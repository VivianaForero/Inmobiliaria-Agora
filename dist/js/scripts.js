/*!
* Start Bootstrap - Shop Homepage v5.0.4 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// Example starter JavaScript for disabling form submissions if there are invalid fields
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }else{
          RegistrarPersona();
          event.preventDefault();
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

(function RegistrarPersona(){
    let nombres = document.querySelector("#txtNombres").value;
    let apellidos = document.querySelector("#txtApellidos").value;
    let celular = document.querySelector("#txtCelular").value;
    let correo = document.querySelector("#txtCorreos").value;

    let url = `http://localhost:5500`;
    let datos = {
      nombres: nombres,
      apellidos: apellidos,
      celular: celular,
      correo: correo 
    };

    fetch(url,{
      method: 'POST',
      body: JSON.stringify(datos),
      headers:{
        'Content-type':'aplication/json'
      }
    })


})
