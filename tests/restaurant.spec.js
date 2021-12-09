const createMenu = require('../src/restaurant');
 
/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  meuRestaurante.order('coxinha') // Retorno: undefined

  meuRestaurante.consumption // Retorno: ['coxinha']

  meuRestaurante.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A ORDEM INDICADA!

*/

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('01 Verifique se o retorno da função createMenu() é um objeto que possui a chave fetchMenu, a qual tem como valor uma função.', () => {
    // TESTE 1: Verifique se o retorno da função createMenu() é um objeto que possui a
    // chave fetchMenu, a qual tem como valor uma função.
    const menu = createMenu('aloha')
    expect(typeof menu === 'object' && !Array.isArray(menu)).toBe(true)
    expect(typeof menu.fetchMenu).toBe('function')
    // const objetoRetornado = createMenu(); // Retorno: { fetchMenu: () => {}, ... }
  });

  it('02 - Verifique se \'objetoRetornado.fetchMenu()\' retorna um objeto cujas chaves são somente \'food\' e \'drink\'', () => {
    // TESTE 2: Verifique se 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`, 
    // considerando que a função createMenu() foi chamada com o objeto: `{ food: {}, drink: {} }`.
    // ```
    const menu = createMenu({ food: {}, drink: {} });
    // menu.fetchMenu() // Retorno: { food: {}, drink: {}}
    expect(menu.fetchMenu()).toEqual({ food: {}, drink: {}})
  });

  it('03 - Verifique se o menu passado pra função createMenu é identico ao menu recuperado pela função \'objetoRetornado.fetchMenu\'', () => {
    // TESTE 3: Verifique se o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
    // ```
    const menu = createMenu({});
    // menu.fetchMenu() // Retorno: objetoQualquer
    // ```
    expect(typeof menu.fetchMenu()).toBe('object')
    expect(Array.isArray(menu.fetchMenu())).toBeFalsy()
    // Agora faça o PASSO 1 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
  });

  it('04 - Verifica se \'objetoRetornado.consumption\', após a criação do menu, retorna um array vazio.', () => {
    // TESTE 4: Verifique se 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.consumption // Retorno: []
    // ```
    const menu = createMenu('objetoQualquer');
    expect(menu.consumption).toEqual([])
    // Agora faça o PASSO 2 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
  });

  it('05 - Verifique se, ao chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro (como `objetoRetornado.order(\'coxinha\')`), tal string é adicionada ao array retornado em `objetoRetornado.consumption', () => {
    // TESTE 5: Verifique se, ao chamar uma função associada à chave `order` no objeto retornado,
    // passando uma string como parâmetro (como `objetoRetornado.order('coxinha')`), tal string é adicionada
    // ao array retornado em `objetoRetornado.consumption`.
    // ```
    const menu = createMenu('objetoQualquer');
    menu.order("coxinha");
    // menu5.consumption // Retorno: ["coxinha"]
    // ```
    expect(menu.consumption).toEqual(['coxinha'])
    // Agora faça o PASSO 3 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
  });

  it('06 - Verifique se, ao adicionar três pedidos, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.', () => {
    // TESTE 6: Verifique se, ao adicionar três pedidos, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.
    // ```
    const menu = createMenu('objetoQualquer');
    menu.order("coxinha");
    menu.order("agua");
    menu.order("sopa");
    menu.order("sashimi");
    // menu6.consumption // Retorno: ["coxinha", "agua", "sopa", "sashimi"]
    // ```
    expect(menu.consumption).toEqual(["coxinha", "agua", "sopa", "sashimi"])
    // Agora faça o TESTE 7 deste arquivo.
  });

  it('07 - Verifique se a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.', () => {
    // TESTE 7: Verifique se a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    // ```
    const menu = createMenu('objetoQualquer');
    menu.order('coxinha');
    menu.order('agua');
    menu.order('coxinha');
    // menu.consumption // Retorno: ['coxinha', 'agua', 'coxinha']
    // ```
    expect(menu.consumption).toEqual(['coxinha', 'agua', 'coxinha'])
    // Agora faça o TESTE 8 deste arquivo.
  });

  it('08 - Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`', () => {
    // TESTE 8: Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    // ```
    const menu = createMenu({
      food: {'coxinha': 3.90, 'sanduiche': 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    })
    menu.order('coxinha');
    menu.order('agua');
    menu.order('coxinha');
    // menu.pay() // Retorno: somaDosPreçosDosPedidos
    // ```
    expect(menu.pay()).toBe(12.87)
    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
});
