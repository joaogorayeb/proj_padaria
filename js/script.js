let listaProdutos = [
    produto = {
        imgProduto: 'img/pao-frances.jpg',
        nomeProduto: 'Pão Francês',
        descProduto: 'Tradicional pão feito com farinha refinada, água, sal e fermento.',
        precoProduto: 'R$8,99 kg',
    },
    produto = {
        imgProduto: 'img/pao-doce.jpg',
        nomeProduto: 'Pão Doce',
        descProduto: 'Pão macio feito com açúcar para adoçar o seu dia.',
        precoProduto: 'R$12,99 kg',
    },
    produto = {
        imgProduto: 'img/pao-integral.jpg',
        nomeProduto: 'Pão Integral',
        descProduto: 'Pão rico em fibras para quem quer uma vida mais saudável.',
        precoProduto: 'R$15,99 kg',
    },
    produto = {
        imgProduto: 'img/pao-queijo.jpg',
        nomeProduto: 'Pão de Queijo',
        descProduto: 'O queridinho do café da manhã.',
        precoProduto: 'R$25,99 kg',
    },
];

let divRow = document.createElement('div');

if(listaProdutos.length > 0){
    console.log("entrou no if");
    for (let i = 0; i < listaProdutos.length; i++){
        let img = document.createElement('img');
        img.classList.add('img-produto');
        img.setAttribute('src', listaProdutos[i].imgProduto);
        img.setAttribute('alt', listaProdutos[i].nomeProduto);
        
        let divNomeProduto = document.createElement('div');
        divNomeProduto.classList.add('nome-produto');
        divNomeProduto.innerText = listaProdutos[i].nomeProduto;
        
        let divDesc = document.createElement('div');
        divDesc.classList.add('descricao');
        divDesc.innerText = listaProdutos[i].descProduto;
        
        let divPreco = document.createElement('div');
        divPreco.classList.add('preco');
        divPreco.innerText = listaProdutos[i].precoProduto
        
        let button = document.createElement('button');
        button.classList.add('btn', 'btn-success');
        button.innerText = "Comprar >>>"
        
        let divCol = document.createElement('div');
        divCol.classList.add('col-3', 'produto');
        divCol.appendChild(img);
        divCol.appendChild(divNomeProduto);
        divCol.appendChild(divDesc);
        divCol.appendChild(divPreco);
        divCol.appendChild(button);
        
        divRow.classList.add('row');
        divRow.appendChild(divCol);
        
        let divProdutos = document.getElementById('produtos');
        divProdutos.appendChild(divRow);
    }
}

