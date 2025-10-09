import { slicer } from './question-4-slice-method';

describe('Questão 4 - Extrair os dois primeiros elementos com SLICE', () => {
    // Teste principal: o que o enunciado pede
    test('deve extrair os dois primeiros elementos usando o array especificado no enunciado', () => {
        const input = [2,4,6,2,8,9,5];
        const expected = [2,4];
        
        const result = slicer(input);
        
        expect(result).toEqual(expected); // toEqual para comparar arrays
    });

    // Teste de caso extremo: array vazio
    test('deve retornar array vazio para array vazio', () => {
        const input: number[] = [];
        const expected: number[] = [];
        
        const result = slicer(input);
        
        expect(result).toEqual(expected); // toEqual e esperando array vazio
    });
});