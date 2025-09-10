// ====== SALIDAS =======
// alert("Hello, World!");
console.log("Hello, World!\n\n");

// ====== ENTRADAS ======
// let i = prompt("Ingrese su nombre:");
// console.log(i);

// ====== VARIABLES ======
let nombre = "Yefrey";
let edad = 25;
let estado = true;
const id = 3.1416;
let dato1 = 5;
let dato2 = "5";

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof estado);
console.log(typeof id);
console.log(dato1 == dato2); //Compara solo el valor
console.log(dato1 === dato2); //Compara el valor y el dato
console.log(dato1 === Number(dato2)); //Convirte el dato2 en número

// ====== OPERADORES ARITMETICOS ======
let a = 145;
let b = 32;

console.log("suma: " + (a + b));
console.log("resta: " + (a - b));
console.log("multplicación: " + a * b);
console.log("División: " + a / b);
console.log("División: " + Math.floor(a / b));

if (dato1 > dato2) {
  console.log("dato 1 es mayor a dato 2");
} else {
  console.log("dato1 es menor o igual al dato 2");
}

const x = [];
const y = [1, 2, 3];
console.log(y);
const arreglo = [5, "Holaaa", [3, 2, 1], { id: 8, nombre: "Yef" }];
console.log(arreglo);
