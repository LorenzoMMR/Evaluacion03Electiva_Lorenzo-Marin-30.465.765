function validarRegistro(event) {
  
  // obtener los valores de los campos del formulario
  var nombres = document.getElementById("nombres").value;
  var apellidos = document.getElementById("apellidos").value;
  var usuario = document.getElementById("usuario").value;
  var correo = document.getElementById("correo").value;
  var contrasena = document.getElementById("contrasena").value;
  var edad = document.getElementById("edad").value;
  var telefono = document.getElementById("telefono").value;
  var direccion = document.getElementById("direccion").value;

  // validar que todos los campos estén llenos
  var camposRequeridos = document.getElementsByClassName("campo-requerido");
  for (var i = 0; i < camposRequeridos.length; i++) {
    if (camposRequeridos[i].value.trim() == "") {
      alert("Por favor llene todos los campos");
      return false;
    }
  }

  // validar la contraseña
  var contrasenaValida = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (!contrasena.match(contrasenaValida)) {
    alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial");
    return false;
  }

  // validar la edad
  if (edad < 18) {
    alert("Debe ser mayor de 18 años para registrarse");
    return false;
  }

  // validar el correo electrónico
  if (!correo.includes("@")) {
    alert("El correo electrónico debe incluir un '@'");
    return false;
  }

  // crear un objeto con los datos de registro
  var datosRegistro = {
    correo: correo,
    contrasena: contrasena
  };

  // almacenar los datos de registro en el almacenamiento local del navegador
  localStorage.setItem("datosRegistro", JSON.stringify(datosRegistro));

  // si todos los campos están llenos y la contraseña y edad son válidas, redirigir al usuario a la página de inicio de sesión
  alert("Registro exitoso");
  window.location.replace("Inicio De Sesion_Lorenzo Marin 30.465.765.html"); // redirigir al usuario a la página de inicio de sesión
  return true;
}