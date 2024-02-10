alert("Bievenido/a al sistema de promedios de notas");
let pinGuardado = 1649;
let ingresar = false;
for (let i = 2; i >= 0; i--) {
    let ingreso = prompt("Ingresa pin del administrador.");
    if (pinGuardado == ingreso) {
        alert("Ingreso exitoso.");
        ingresar = true;
        break;
    } else {
        alert("Error");
    }
}
if (ingresar) {
    let opcion = prompt("Opcion: \n1 - Ingresar alumno. \npresioná X para finalizar.  ");
    while (opcion !== "x") {
        if (opcion == "1") {
            let nombreAlumno = prompt("Ingresar nombre del alumno: ");
            let apellidoAlumno = prompt("Ingresa el apellido del alumno: ")
            let nota1 = prompt("Ingrese nota 1er trimestre: ");
            let nota2 = prompt("Ingrese nota 2do trimestre: ");
            let nota3 = prompt("Ingrese nota 3er trimestre: ");
            nota1 = parseFloat(nota1);
            nota2 = parseFloat(nota2);
            nota3 = parseFloat(nota3);
            let promedio = (nota1 + nota2 + nota3) / 3;
            promedio = promedio.toFixed(2);
            if (nombreAlumno != "" && apellidoAlumno != "" && nota1 != "" && nota2 != "" && nota3 != "") {
                console.log("Nombre y apellido del alumno/a ingresado es: " + nombreAlumno + " " + apellidoAlumno + "\n La nota del primer trimestre es: " + nota1 + "\n La nota del segundo trimestre es: " + nota2 + "\n La nota del tercer trimestre es: " + nota3 + "\n La nota final del alumno/a es: " + promedio);
                alert("El Alumno/a: " + nombreAlumno + " " + apellidoAlumno + " Tiene un promedio de: " + promedio);
                break;
            } else {
                alert("Error, completar todos los campos. Vuelva a intentarlo.")
            }
        }
    }
} else {
    alert("PIN incorrecto, terminal bloqueada.")
}
alert("Gracias por utilizar el sistema de promedio de notas...")





