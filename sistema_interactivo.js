function captura() {
  let nombre = document.getElementById("namecoder").value;
  let edadStr = document.getElementById("edadcoder").value;
  let edad = parseInt(edadStr, 10);

  // Validación de nombre
  if (nombre.trim() === "") {
    alert("El campo 'Nombre' es obligatorio");
    document.getElementById("namecoder").focus();
    return;
  } else if (!/^[A-Za-z]+$/.test(nombre)) {
    alert("El campo 'Nombre' solo puede contener letras.");
    document.getElementById("namecoder").focus();
    return;
  }

  // Validación de edad
  if (edadStr.trim() === "" || isNaN(edad)) {
    alert("El campo 'Edad' es obligatorio y debe ser un número.");
    document.getElementById("edadcoder").focus();
    return;
  }

  // Mensaje para mayores y menores de 18 años
  if (edad >= 18) {
    alert(`Hola ${nombre}, eres mayor de edad. Prepárate para grandes oportunidades en el mundo de la programación.`);
  } else{
    if (edad <= 17){
        alert(`Hola ${nombre}, eres menor de edad. Sigue aprendiendo y disfrutando del codigo.`)
    }
  }

  // Mostrar datos en consola y limpiar campos
  console.log(`${nombre} ${edad}`);
  document.getElementById("namecoder").value = "";
  document.getElementById("edadcoder").value = "";
  document.getElementById("namecoder").focus();
}

