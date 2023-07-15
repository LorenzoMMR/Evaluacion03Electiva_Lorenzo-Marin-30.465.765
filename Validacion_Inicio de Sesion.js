function validarSesion(event) {
    event.preventDefault(); // evita que se recargue la página al enviar el formulario
  
    // obtener los valores de los campos del formulario
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
  
    // obtener los datos de registro almacenados en el almacenamiento local
    var datosRegistro = JSON.parse(localStorage.getItem("datosRegistro"));
  
    // verificar si el correo electrónico y la contraseña coinciden con los datos de registro
    if (!datosRegistro || correo !== datosRegistro.correo || contrasena !== datosRegistro.contrasena) {
      alert("El correo electrónico o la contraseña son incorrectos");
      return false;
    }
  
    // si todo está bien, redireccionar al usuario a la página de bienvenida
    window.location.href = "bienvenida.html";
    return true;
  }