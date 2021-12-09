/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto', () => {
    // Teste se circle retorna um objeto.
    expect(typeof circle(5) === 'object' && !Array.isArray(circle(5))).toBeTruthy()
  });

  it('Verifica se ao não receber um parametro ou ao receber uma string como parametro, a função `circle` retorna undefined', () => {
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    expect(circle()).toBeUndefined()

    // Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
    expect(circle('w')).toBeUndefined()
  });

  it('Verifica se ao receber um valor, a função `circle` retorna um objeto contendo 3 propriedades', () => {
    // Teste se o objeto retornado tem 3 propriedades.
    expect(Object.keys(circle(10)).length).toBe(3)
  });

  it('Verifica se ao receber um raio de 2, a função `circle` retorna um objeto contendo o valor esperado para a circunferência', () => {
    // Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.
    expect(circle(2).circumference).toBe(12.56)
  });

  it('Verifica se ao receber um raio de 3, a função `circle` retorna um objeto contendo o valor esperado para a area de 3', () => {
    // Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.
    expect(circle(3).area).toBeCloseTo(28.26)
  });

  it('Verifica se ao receber um raio de 3, a função `circle` retorna um objeto contedos os valores esperados', () => {
    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
    expect(circle(3).area).toBeCloseTo(28.26)
    expect(circle(3).circumference).toBeCloseTo(18.84)
  });
});
