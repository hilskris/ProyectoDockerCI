const evaluarTemperatura = require('../src/temperatura');

test('Debe indicar Normal cuando la temperatura es menor a 30', () => {
    expect(evaluarTemperatura(25)).toBe('Normal');
});

test('Debe indicar Alerta cuando la temperatura está entre 30 y 39', () => {
    expect(evaluarTemperatura(35)).toBe('Alerta');
});

test('Debe indicar Crítico cuando la temperatura es mayor o igual a 40', () => {
    expect(evaluarTemperatura(45)).toBe('Crítico');
});