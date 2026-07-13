const tech = 'node.js'

//retorna true ou false serve para buscar strings ou um array de strings tem que ser exatmente aquele valor!

// statsWith se começa com '.'!
// endsWith se termina com 's'

const includes = tech.includes('.')

const produtos = [
    {
        name: "Cafeteira Elétrica",
        preco: 149.90,
        quantidade: 2
    },
    {
        name: "Cápsulas de Café",
        preco: 25.50,
        quantidade: 5
    },
    {
        name: "Açúcar",
        preco: 4.80,
        quantidade: 1
    }
];

//.find --> buscar 
// busca produto por produto
//retorna true qual for
const find = produtos.find((produto) => {
    console.log('La ele', produto.name === 'Açúcar')
    // return true
})
console.log({ find });
//findIndex retorna a posição do elemento {0, 1, 2}

//aparentemente faz a mesma coisa
const some = produtos.some(item => item.preco > 100.00);
console.log({ some });

//ve se todos são maiores que zero TODOS
const every = produtos.every(item => item.quantidade > 0);
console.log(produtos);

//----------------------------------------------------------------------

// .map GOAT
//cria um novo array com a mesma quantidade
//return para nao retornar map undefined!
//sempre sera um array quando retornar
const map = produtos.map((produto) => { })
console.log({ map });

const produtosMap = [
    { produto: "Cafeteira Elétrica", preco: 140.00, quantidade: 2 },
    { produto: "Cápsulas de Café", preco: 20.00, quantidade: 5 },
    { produto: "Açúcar", preco: 5.00, quantidade: 1 }
];

//o .map() gera um novo array com os preços alterados
const produtosComDesconto = produtosMap.map(item => {
    return {
        ...item,                 //copia as propriedades originais (produto e quantidade)
        preco: item.preco * 0.9  //calcula o novo preço com 10% de desconto
    };
});

console.log(produtosComDesconto);
/*saída:
[
  { produto: 'Cafeteira Elétrica', preco: 126, quantidade: 2 },
  { produto: 'Cápsulas de Café', preco: 18, quantidade: 5 },
  { produto: 'Açúcar', preco: 4.5, quantidade: 1 }
]
*/

const apenasNomes = produtosMap.map(item => item.produto);

console.log(apenasNomes);
//saída: [ 'Cafeteira Elétrica', 'Cápsulas de Café', 'Açúcar' ]

//----------------------------------------------------------------------

//filterzao brabo
//cria um novo array, porem nao com a mesma quantidade
const filter = produtos.filter(item => item.quantidade > 0);

console.log(filter);

//----------------------------------------------------------------------

//reduce?
//uso mais clássico dele é somar o valor total de um carrinho de compras.
//o reduce recebe dois parâmetros principais: a função de cálculo e o valor inicial (0)
const valorTotalCarrinho = produtos.reduce((acumulador, item) => {
    const subtotalItem = item.preco * item.quantidade;
    return acumulador + subtotalItem;
}, 0); //valor inicial o 0

console.log(valorTotalCarrinho); 