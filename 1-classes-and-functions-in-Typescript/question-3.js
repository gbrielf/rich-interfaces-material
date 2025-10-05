// 3. Create a program that prints its elements in order. Use the SORT method of the Array class to sort in descending order, passing an arrow function as a parameter.
// 3.1 Write a test with the array ['carro', 'boneco', 'ave', 'lapis']
// 3. Faça um programa que imprima seus elementos ordenados. Use o método SORT
// da classe Array para ordenar de forma decrescente, passando uma função arrow como parâmetro.
// 3.1 Escreva um teste com o array [‘carro’, ’boneco’, ’ave’, ‘lapis’]
var test = ['carro', 'boneco', 'ave', 'lapis'];
function sortenator(x) { return x.sort(); }
var result = sortenator(test);
console.log(result);
