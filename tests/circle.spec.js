const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
    expect(circle('b')).toBe(undefined);
    // Teste se circle retorna um objeto.
    expect(typeof circle(1)).toBe('object');
    // Teste se o objeto retornado possui 3 propriedades.
    expect(Object.keys(circle(50)).length).toBe(3);
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    expect(circle()).toBeUndefined();
    // Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à circunferência correta para um círculo de raio 2.
    expect(circle(2).circumference).toBe(12.56);
    // Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à área correta para um círculo de raio 3.
    expect(circle(3).area).toBeCloseTo(28.26);
    // Teste se a função retorna, em um objeto, os dados corretos de um círculo de raio 3.
    expect(Number(Object.values(circle(3))[0])).toBe(3);
    expect(Number(Object.values(circle(3))[1])).toBeCloseTo(28.26);
    expect(Number(Object.values(circle(3))[2])).toBe(18.84);
  });
});
