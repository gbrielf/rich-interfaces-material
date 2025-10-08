// 5. Create a program that reads the array and extracts the even elements. Use the FILTER method of the Array class, passing an arrow function as a parameter.
// 5.1 Write a test with the array [8, 3, 9, 5, 6, 12]
// 5. Faça um programa que leia o array e extrai os elementos pares. Use o método FILTER da classe Array, passando uma função arrow como parâmetro.
// 5.1 Escreva um teste com o array [8, 3, 9, 5, 6, 12]
var array = [8, 3, 9, 5, 6, 12];
var pairNumbers = array.filter(function (num) { return num % 2 === 0; });
console.log(pairNumbers);
