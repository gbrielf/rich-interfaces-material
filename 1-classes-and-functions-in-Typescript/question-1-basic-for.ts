// 1. Create a TypeScript program that calculates the square of each element in the array, using the following strategies:
// a. iterating with a simple for loop
// b. iterating with forEach
// 1.1 Write a test with the array [3,5,7,3,8,9,1]

// 1. Faça um programa TypeScript que calcule o quadrado de cada elemento do array, use as seguintes estratégias:
// a. iterando com for simples
// b. iterando com forEach
// 1.1 Escreve um teste com o array [3,5,7,3,8,9,1]

let listofnumbers: number[] = [3,5,7,3,8,9,1];

// basic for:

function squareEachElement(x: number): number {
    return x * x;
}

for(let i = 0; i < listofnumbers.length; i++){
    let resultado: number = squareEachElement(listofnumbers[i])
    console.log(`${listofnumbers[i]}² = ${resultado}`);
}

// for each form:

listofnumbers.forEach((num) => {console.log(num*num)})

// =================== EXPORTS PARA TESTES (SEM MODIFICAR O CÓDIGO ORIGINAL) ===================

// Exportar a função original para teste
export { squareEachElement };

// Exportar o array original para teste
export { listofnumbers };

// Função auxiliar que implementa a lógica do for original (para teste)
export function squareArrayWithFor(numbers: number[]): number[] {
    const result: number[] = [];
    for(let i = 0; i < numbers.length; i++){
        result.push(squareEachElement(numbers[i]));
    }
    return result;
}