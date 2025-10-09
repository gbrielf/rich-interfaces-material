import { filterEvenNumbers } from './question-5-filter-method';

describe('Questão 5 - Extrair os elementos pares com FILTER', () => {
    // Teste principal: o que o enunciado pede
    test('deve extrair os elementos pares usando o array especificado no enunciado', () => {
        const input = [8, 3, 9, 5, 6, 12];
        const expected = [8, 6, 12];
        
        const result = filterEvenNumbers(input);
        
        expect(result).toEqual(expected); // toEqual para comparar arrays
    });

    // Teste de caso extremo: array vazio
    test('deve retornar array vazio para array vazio', () => {
        const input: number[] = [];
        const expected: number[] = [];
        
        const result = filterEvenNumbers(input);
        
        expect(result).toEqual(expected); // toEqual e esperando array vazio
    });
});