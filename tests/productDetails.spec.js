const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  const result =  productDetails('cadeira gamer', 'mesa')
  const [obj1, obj2] = result

  it('Verifica se productDetails é uma função.', () => {
    // Teste se productDetails é uma função.
    expect(productDetails).toBeInstanceOf(Function);
  });

  it('Verifica se o retorno da função é um array.', () => {
    // Teste se o retorno da função é um array.
    expect(result).toBeInstanceOf(Object);
  });

  it('Verifica se o array retornado pela função contém dois itens dentro', () => {
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(result).toHaveLength(2)
  });

  it('Verifica se os dois itens dentro do array retornado pela função são objetos.', () => {
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(obj1).toBeInstanceOf(Object);
    expect(obj1).not.toBeInstanceOf(Array);
    expect(obj2).toBeInstanceOf(Object);
    expect(obj2).not.toBeInstanceOf(Array);
  });

  it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(obj1).not.toBe(obj2)
  });

  it('Verifica se os dois productIds terminam com 123', () => {
    // Teste se os dois productIds terminam com 123.
    expect(obj1.details.productId).toMatch(/123$/)
    expect(obj2.details.productId).toMatch(/123$/)
  });
});
