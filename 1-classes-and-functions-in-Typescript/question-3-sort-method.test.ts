import { sortenator } from './question-3-sort-method';

describe('Questão 3 - Ordenação de strings com SORT', () => {
    // Teste principal: o que o enunciado pede
    test('deve ordenar strings em ordem decrescente usando o array especificado no enunciado', () => {
        const input = ['carro','boneco','ave','lapis'];
        const expected = ['lapis','carro','boneco','ave'];
        
        const result = sortenator(input);
        
        expect(result).toEqual(expected); // toEqual para comparar arrays
    });

    // Teste de caso extremo: array vazio
    test('deve retornar array vazio para array vazio', () => {
        const input: string[] = [];
        const expected: string[] = [];
        
        const result = sortenator(input);
        
        expect(result).toEqual(expected); // toEqual e esperando array vazio
    });
});