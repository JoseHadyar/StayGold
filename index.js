

let cA = parseInt (prompt("¿Cuantos estudiantes son?"))
let eA
let sA = 0 // Acumulador
let n

for(n=1; n<=cA;n++){
    eA = parseInt(prompt("Ingrese la edad del Alumno" +n))
    sA = sA + eA 
}

console.log(`El promedio de las edades de los ${cA} alumnos es: ${sA/cA}`);