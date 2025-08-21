let lanches = [
    { nome: "Hambúrguer", preco: 15 },
    { nome: "Pizza", preco: 20 },
    { nome: "Batata frita", preco: 10 },
    { nome: "Refrigerante", preco: 15 },
    { nome: "Suco", preco: 15 }
];

let carrinho = [];


const listaLanches = document.getElementById('lista-lanches');
const finalizarPedido = document.getElementById('finalizar-pedido');
const resumoDoPedido = document.getElementById('resumo-pedido');

for (let lanche of lanches) {

    const itemLi = document.createElement('li');
    itemLi.textContent = lanche.nome + " – R$" + lanche.preco;

    const buttonItem = document.createElement('button');
    buttonItem.textContent = "Adicionar";

    buttonItem.addEventListener('click', function () {
        const itemExistente = carrinho.find(item => item.nome === lanche.nome);
        if (itemExistente) {
            itemExistente.quantidade += 1;
        } else {
            carrinho.push({ nome: lanche.nome, preco: lanche.preco, quantidade: 1 });
        }
    });

    itemLi.appendChild(buttonItem);
    listaLanches.appendChild(itemLi);
}

finalizarPedido.addEventListener('click', function() {
    resumoDoPedido.innerHTML = "";
    let total = 0;
    for (let item of carrinho) {
        subtotal = item.preco * item.quantidade;
        total += subtotal;

        let itemResumo = document.createElement('p');
        itemResumo.textContent = `${item.nome} (${item.quantidade}x) – R$${subtotal}`;

        resumoDoPedido.appendChild(itemResumo);
    }

    let totalResumo = document.createElement('p');
    totalResumo.textContent = `Total: R$${total}`;
    totalResumo.classList.add('resumo-total');
    resumoDoPedido.appendChild(totalResumo);

    const buttonDeLimpar = document.createElement('button');
    buttonDeLimpar.textContent = "🗑 Limpar Pedido"
    buttonDeLimpar.classList.add('btn-limpar');

    buttonDeLimpar.addEventListener('click', function() {
        carrinho = [];
        resumoDoPedido.innerHTML = "";
    });

    resumoDoPedido.appendChild(buttonDeLimpar);
});
