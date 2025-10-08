// 2. Create a TypeScript program that transforms the array by concatenating the strings with 1 (one) space (" "). Use the Array class's JOIN method, passing an arrow function as a parameter.
// 2.1 Write a test with the array ['Arrays', 'com', 'TypeScript']
// 2. Faça um Programa TypeScript que transforme o array, concatenando as strings com 1 (um) espaço (“ “). Utilize o método JOIN da classe Array, passando uma função arrow como parâmetro.
// 2.1 Escreva um teste com o array [‘Arrays’, ‘com’, ‘TypeScript’]
var lista = ['Arrays', 'com', 'TypeScript'];
function concatenando(x) { return x.join(' '); }
var result = concatenando(lista);
console.log(result);
