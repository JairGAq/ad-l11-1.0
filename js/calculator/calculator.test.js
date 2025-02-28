const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});
//aqui empiezo yo
//Prueba: División de números positivos
test('divides 6 by 2 to equal 3', () => {
  expect(calculator.divide(6, 2)).toBe(3);
});
//Prueba: División por cero
test('divides 5 by 0 to throw error', () => {
  expect(() => calculator.divide(5, 0)).toThrow('No se puede dividir por cero');
});
//Prueba: Multiplicación de números positivos
test('multiplies 3 by 4 to equal 12', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});
//Prueba: Multiplicación por cero
test('multiplies 5 by 0 to equal 0', () => {
  expect(calculator.multiply(5, 0)).toBe(0);
});

//tarea 3
//Prueba unitaria para verificar la función divide() pasando 0 como segundo argumento
test('divides 5 by 0 to throw error', () => {
  expect(() => calculator.divide(5, 0)).toThrow('No se puede dividir por cero');
});
