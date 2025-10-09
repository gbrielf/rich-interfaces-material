// 4. Create a program that reads the array and takes only the first two elements. Use the SLICE method of the Array class.
// 4.1 Write a test with the array [2,4,6,2,8,9,5]

// 4. Faça um programa que leia o array pegue apenas os dois primeiros elementos. Use o método SLICE da classe Array.
// 4.1 Escreva um teste com o array [2,4,6,2,8,9,5]

let array_for_slice: number[] = [2,4,6,2,8,9,5];

// exemplo da questão 2 export function concatenation(x: string[]): string { return x.join(' '); }
export function slicer(x: number[]): number[] {return x.slice(0,2)}

let twoFirstElements: number[] = slicer(array_for_slice);

console.log(twoFirstElements);