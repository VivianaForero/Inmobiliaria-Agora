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
            ValidarUsuario();
            event.preventDefault();
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  
  (function ValidarUsuario(){

      let usuario = document.querySelector("#txtCorreos").value;

  
      let url = `http://localhost:5500`;
      let datos = {

        usuario: usuario 
      };
  
      fetch(url,{
        method: 'GET',
        body: JSON.stringify(datos),
        headers:{
          'Content-type':'aplication/json'
        }
      })
  
  
  })
  