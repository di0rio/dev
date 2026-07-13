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

// .map GOAT
//return para nao retornar map undefined!
//sempre sera um array quando retornar
const map = produtos.map((produto) => { })
console.log({ map });

const produtosMap = [
    { produto: "Cafeteira Elétrica", preco: 140.00, quantidade: 2 },
    { produto: "Cápsulas de Café", preco: 20.00, quantidade: 5 },
    { produto: "Açúcar", preco: 5.00, quantidade: 1 }
];

// O .map() gera um novo array com os preços alterados
const produtosComDesconto = produtosMap.map(item => {
    return {
        ...item,                 // Copia as propriedades originais (produto e quantidade)
        preco: item.preco * 0.9  // Calcula o novo preço com 10% de desconto
    };
});

console.log(produtosComDesconto);
/* Saída:
[
  { produto: 'Cafeteira Elétrica', preco: 126, quantidade: 2 },
  { produto: 'Cápsulas de Café', preco: 18, quantidade: 5 },
  { produto: 'Açúcar', preco: 4.5, quantidade: 1 }
]
*/

const apenasNomes = produtosMap.map(item => item.produto);

console.log(apenasNomes);
// Saída: [ 'Cafeteira Elétrica', 'Cápsulas de Café', 'Açúcar' ]


