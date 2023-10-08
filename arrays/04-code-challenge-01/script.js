'use strict';

/* Julia e Kate estão estudando sobre cães. Cada uma delas perguntou a 5 donos de cães sobre a idade dos cachorros e armazenaram os dados num array (um array para cada). Por agora, elas estão apenas interessadas em saber se o cão é um adulto ou filhote. Um cão é adulto se tiver pelo menos 3 anos de idade.

Criar uma funcao chamada 'checarCaes', que aceita 2 arrays de idades de cão 'caesJulia' e 'caesKate' e faça os seguintes passos:

1 - Julia descobriu que os donos do primeiro e dos dois ultimos cachorros na realidade tem gatos e não cães. Crie então uma copia do array de Julia e remova a idade dos gatos do array copiado (porque é uma má prática mudar parametros de funções)

2 - Criar um array com os dados novos de Julia e os da Kate

3 - Para cada cão remanescente, log no console qual é adulto e qual é filhote ('O cão 1 é adulto, e tem 5 anos de idade') ('O cão 2 ainda é um filhote')

4 - Use os dados teste abaixo
*/

const caesJulia1 = [3, 5, 2, 12, 7];
const caesJulia2 = [9, 16, 6, 8, 3];
const caesKate1 = [4, 1, 15, 8, 3];
const caesKate2 = [10, 5, 6, 1, 4];

const checarCaes = function (caesJulia, caesKate) {
  const caesJuliaCorreto = caesJulia.slice(1, -2);
  const caes = caesJuliaCorreto.concat(caesKate);
  caes.forEach((idadeCao, index) => {
    idadeCao >= 3
      ? console.log(
          `O cão ${index + 1} é adulto, e tem ${idadeCao} anos de idade`
        )
      : console.log(`O cão ${index + 1} ainda é um filhote`);
  });
};

checarCaes(caesJulia1, caesKate1);
console.log('----------------------------------------');
checarCaes(caesJulia2, caesKate2);
