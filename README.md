# desafio-gabriel-mattano
Desafio proposto pelo programa de Estágio START DB, sob a premissa de completar a estrutura de um código Javascript e complementá-lo afim de atender as demais premissas dos testes automatizados, gerando um sistema de caixa de lanchonete.

O DESAFIO
Olá! Você foi contratado para automatizar o caixa da Lanchonete da DB. Sua missão será construir a lógica que calcula o valor de uma compra de acordo com o cardápio, regras e descontos da Lanchonete.

CARDÁPIO
codigo	descrição	valor
cafe	Café	R$ 3,00
chantily	Chantily (extra do Café)	R$ 1,50
suco	Suco Natural	R$ 6,20
sanduiche	Sanduíche	R$ 6,50
queijo	Queijo (extra do Sanduíche)	R$ 2,00
salgado	Salgado	R$ 7,25
combo1	1 Suco e 1 Sanduíche	R$ 9,50
combo2	1 Café e 1 Sanduíche	R$ 7,50
FORMAS DE PAGAMENTO
Atualmente a Lanchonete aceita as seguintes formas de pagamento:

dinheiro
debito
credito
O sistema deve receber essa informação como string, utilizando a grafia exatamente igual aos exemplos acima.

DESCONTOS E TAXAS
Pagamento em dinheiro tem 5% de desconto
Pagamento a crédito tem acréscimo de 3% no valor total
OUTRAS REGRAS
Caso item extra seja informado num pedido que não tenha o respectivo item principal, apresentar mensagem "Item extra não pode ser pedido sem o principal".
Combos não são considerados como item principal.
É possível pedir mais de um item extra sem precisar de mais de um principal.
Se não forem pedidos itens, apresentar mensagem "Não há itens no carrinho de compra!"
Se a quantidade de itens for zero, apresentar mensagem "Quantidade inválida!".
Se o código do item não existir, apresentar mensagem "Item inválido!"
Se a forma de pagamento não existir, apresentar mensagem "Forma de pagamento inválida!"
O CÓDIGO
Você está recebendo uma estrutura básica para desenvolver a lógica do caixa. O arquivo principal está localizado dentro da pasta src e se chama caixa-da-lanchonete.js. Você pode desenvolver a sua lógica criando outros arquivos, métodos e até mesmo outras classes, porém o resultado deve poder ser obtido através do método calcularValorDaCompra.

ALERTA: É importante que a estrutura básica descrita acima não seja alterada, incluindo nome e parâmetros do método. Iremos validar sua solução através destes, assim como você pode validar através dos cenários de testes já implementados em src/caixa-da-lanchonete.test.js.

VALIDANDO A SOLUÇÃO
Junto com a estrutura básica você está recebendo alguns cenários de testes para auxiliar na validação da sua solução. Recomendamos que você crie mais casos de teste para aumentar a confiabilidade da sua solução. 

INPUTS
O método calcularValorDaCompra recebe dois parâmetros, formaDePagamento e itens, sendo o primeiro uma string com os possíveis valores válidos: debito, credito e dinheiro. O segundo parâmetro contém uma array dos itens que serão comprados. Cada item é uma string contendo o código do item e a quantidade do mesmo separados por uma vírgula. 

OUPUTS
O retorno do método calcularValorDaCompra deve ser sempre uma string e conteúdo dela pode ser ou o valor total da compra ou uma mensagem de erro conforme as regras descritas anteriormente. O valor da compra deve ser formatado com R$ e decimais separados por vírgula.

Para padronizar a quantidade de decimais, utilize o método toFixed do JavaScript. Esse método serve o propósito deste desafio, porém na vida real a regra de arredondamento deve ser conferida!


