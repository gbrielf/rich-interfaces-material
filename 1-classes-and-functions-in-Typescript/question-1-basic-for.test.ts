import { squareEachElement, squareArrayWithFor } from './question-1-basic-for';

test('squareEachElement: 3 -> 9', () => {
    expect(squareEachElement(3)).toBe(9);
});

test('array [3,5,7] com for -> [9,25,49]', () => {
    expect(squareArrayWithFor([3,5,7])).toEqual([9,25,49]);
});

test('exercício 1.1 - for: [3,5,7,3,8,9,1] -> [9,25,49,9,64,81,1]', () => {
    const input = [3,5,7,3,8,9,1];
    const expected = [9,25,49,9,64,81,1];
    
    expect(squareArrayWithFor(input)).toEqual(expected);
});