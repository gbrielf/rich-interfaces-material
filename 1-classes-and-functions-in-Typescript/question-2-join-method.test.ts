import { concatenation } from './question-2-join-method';

describe('Questão 2 - Concatenação de strings com JOIN', () => {
    // Teste principal: o que o enunciado pede
    test('deve concatenar strings com espaço usando o array especificado no enunciado', () => {
        const input = ['Arrays', 'com', 'TypeScript'];
        const expected = 'Arrays com TypeScript';
        
        const result = concatenation(input);
        
        expect(result).toBe(expected);
    });

    // Teste de caso extremo: array vazio
    test('deve retornar string vazia para array vazio', () => {
        const input: string[] = [];
        const expected = '';
        
        const result = concatenation(input);
        
        expect(result).toBe(expected);
    });
});