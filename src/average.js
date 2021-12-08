/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (arr) => {
  if (arr.length === 0 || arr[0] === ' ') return;

  const result = Math.round(arr.reduce((previous, current) => {
    const condicao = typeof previous !== 'number' || typeof current !== 'number'
    return condicao ? undefined : previous + current
  }) / arr.length)

  if (result === 0) return 0;

  return result || undefined
};

console.log(average([0, 0, 0, 0, 0, 0, 1]))
module.exports = average;
