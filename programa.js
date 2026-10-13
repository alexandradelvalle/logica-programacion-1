// Práctica de Comparación de Números
// Crear un programa en Javascript que realice lo siguiente:
// Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
// Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
// Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
// Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
// Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
// Entradas: 
// 4, 4, 2.
// Salida:
// 4, 4, 2.
// 2, 4, 4.
// Entradas: 
// 4, 2, 4.
// Salida:
// 4, 4, 2.
// 2, 4, 4.
// Entradas: 
// 2, 4, 4.
// Salida:
// 4, 4, 2.
// 2, 4, 4.

const prompt = require("prompt-sync")();

console.log("-- Ordena tres números de mayor a menor y de menor a mayor --");

const num1 = Number(prompt("Escribe tu primer número: "));
const num2 = Number(prompt("Escribe tu segundo número: "));
const num3 = Number(prompt("Escribe tu tercer número: "));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("⚠️  Error: Has ingresado letras o caracteres no válidos. Por favor, introduce solo números");
} else if (num1 === num2 && num1 === num3) {
    console.log("⚠️  Los números son iguales. Por favor, ingrese otros números");
} else {
    let numMayor = Math.max(num1, num2, num3);
    let numMenor = Math.min(num1, num2, num3);
    let numCentro = (num1 + num2 + num3) - numMayor - numMenor;
    console.log(numMayor, numCentro, numMenor);
    console.log(numMenor, numCentro, numMayor);
} 
