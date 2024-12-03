let itemPedido = document.getElementById('item2')
let qtdPedida = document.getElementById('qtd2')
let itemDevolvido = document.getElementById('item3')
let qtdDevolvida = document.getElementById ('qtd3')



document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Documento carregado e pronto.');
    const form = document.getElementById('cadForm');
    form.addEventListener('submit', function(event) {
    
        event.preventDefault();
        const item = document.getElementById('item').value;
        const quantidade = document.getElementById('qtd').value;
        let listaAtual = JSON.parse(localStorage.getItem('listaAtual')) || [];
        // const senha = document.getElementById('senha').value;
        // Gerar um ID único para o novo usuário
        // Se houver usuários cadastrados, define o ID como o próximo na sequência. Caso contrário, define o ID como 1.
        let id = listaAtual.length ? listaAtual[listaAtual.length - 1].id + 1 : 1; //nota: "?" = if , ":" = else
        // Verifica se o ID já está em uso. Se estiver, incrementa o ID até encontrar um valor único.
        let emprestimo = '0';
        while (listaAtual.some(usuario => usuario.id === id)) {
            id++;
        }
        const usuario = { id, item, quantidade, emprestimo  };
        
        // const novaLista = atualizarLista(usuarios, item2, 123)
        
        for(let usuario of listaAtual){
            if(usuario.item.toUpperCase() == item.toUpperCase()){
                
                let update = Number(usuario.quantidade) + Number(quantidade)
                usuario.quantidade = update
                localStorage.setItem('listaAtual', JSON.stringify(listaAtual));
                modal.style.display = "block";
        form.reset();
                return
            }
        }
        
        listaAtual.push(usuario);
        localStorage.setItem('listaAtual', JSON.stringify(listaAtual));
        
        
        
        
        modal.style.display = "block";
        form.reset();
    });
});



function retirada() { 
    let listaAtual = JSON.parse(localStorage.getItem('listaAtual')) || []; 
    let novaLista = listaAtual 
    console.log('ESTOU AQUI', itemPedido.value) 
    for(let i=0; i<novaLista.length; i++){
        
        const itemObject = novaLista[i]
        if(itemObject.item.toUpperCase() == itemPedido.value.toUpperCase()){
            let novoItem = itemObject
            
            //novoItem.quantidade = novaQuantidade
            let novaQuantidade = Number(document.getElementById('qtd2').value)
            let existente = Number(novoItem.quantidade)
            let update= existente-novaQuantidade
            let empUpdate = Number(novoItem.emprestimo + novaQuantidade)
            novoItem.quantidade = update
           novoItem.emprestimo = empUpdate
            novaLista[i] = novoItem
            break
          
        }
    }
    console.log("listaAtual", novaLista)

        localStorage.setItem('listaAtual', JSON.stringify(novaLista));
        
}

function devolver(){
    let listaAtual = JSON.parse(localStorage.getItem('listaAtual')) || [];
    let novaLista= listaAtual
    console.log('ESTOU AQUI',itemDevolvido.value )
    for(let i=0; i<novaLista.length; i++){
        const itemObject = novaLista[i]
        if(itemObject.item.toUpperCase() == itemPedido.value.toUpperCase()){
            let novoItem = itemObject
            let novaQuantidade = Number(document.getElementById('qtd3').value)
            let existente= Number(novoItem.quantidade)
            let update = existente+novaQuantidade
            let empUpdate = Number(novoItem.emprestimo - novaQuantidade)
            novoItem.quantidade = update
            novoItem.emprestimo = empUpdate
            novaLista[i]= novoItem
            break
        }

    }
    console.log("listaAtual", novaLista)

    localStorage.setItem('listaAtual', JSON.stringify(novaLista));
}

// Obtém o modal

// Obtém o elemento <span> que fecha o modal
//let span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no <span> (x), fecha o modal
/*span.onclick = function() {
    modal.style.display = "none";
}*/
// Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
/*window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/

/*-----------------------------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', (event) => {
    // Esta função é executada quando o documento HTML é completamente carregado
    function carregarTabela() {
        // Função para carregar e exibir os dados da tabela
        const tabela = document.getElementById('listageral').getElementsByTagName('tbody')[0];
        tabela.innerHTML = '';
        // Obter os usuários armazenados no LocalStorage ou um array vazio se não houver dados
        let listaAtual = JSON.parse(localStorage.getItem('listaAtual')) || [];
        // Iterar sobre cada usuário para criar as linhas da tabela dinamicamente
        for (let usuario of listaAtual) {
            let linha = tabela.insertRow();
            let celulaItem = linha.insertCell(0);
            let celulaQtd = linha.insertCell(1);
            let celulaEmp = linha.insertCell(2);
            let celulaAcoes = linha.insertCell(3);
            // Preencher as células com os dados do usuário
            //console.log("ESTAVA AQUI", usuario)
            celulaItem.innerHTML = usuario.item;
            celulaQtd.innerHTML = usuario.quantidade;
            celulaEmp.innerHTML = usuario.emprestimo;
            // Adicionar um botão de excluir na célula de Ações com atributos de dados para ID e nome do usuário
            celulaAcoes.innerHTML = `<button class="excluirBtn" data-id="${usuario.id}" data-item="${usuario.item}">Excluir</button>`;
        }
        // Adicionar um ouvinte de evento para cada botão de excluir gerado dinamicamente
        let botoes = document.querySelectorAll('.excluirBtn');
        	for(let button of botoes){
            button.addEventListener('click', function() {
                let itemUsuario = this.getAttribute('data-item');
                let idUsuario = this.getAttribute('data-id');
                mostrarModal(itemUsuario, idUsuario); // Chamar função para exibir o modal de confirmação
            });
        };
    }
    carregarTabela(); // Chamar a função para carregar a tabela quando o documento é carregado
    // Definição das variáveis para o modal de confirmação
    let modal = document.getElementById("modalExcluir");
    //let span = document.getElementsByClassName("close")[0];
    let confirmarExcluir = document.getElementById("confirmarExcluir");
    let cancelarExcluir = document.getElementById("cancelarExcluir");
    let usuarioItemElemento = document.getElementById("usuarioItem");
    let usuarioParaExcluirId = '';
    // Função para exibir o modal de confirmação
    function mostrarModal(itemUsuario, idUsuario) {
        usuarioParaExcluirId = idUsuario;
        usuarioItemElemento.textContent = itemUsuario;
        modal.style.display = "block";
    }
    // Ouvinte de evento para fechar o modal quando clicar no 'x'
    span.onclick = function() {
        modal.style.display = "none";
    }
    // Ouvinte de evento para fechar o modal ao clicar no botão Cancelar
    cancelarExcluir.onclick = function() {
        modal.style.display = "none";
    }
    // Ouvinte de evento para confirmar a exclusão quando clicar no botão Excluir
    confirmarExcluir.onclick = function() {
   	 // Obter os usuários do LocalStorage ou um array vazio se não houver dados
    	let listaAtual = JSON.parse(localStorage.getItem('listaAtual')) || [];

    	// Filtrar o usuário a ser excluído pelo ID
    	listaAtual = listaAtual.filter(usuario => usuario.id != usuarioParaExcluirId);
        //console.log(listaAtual)
    	// Atualizar o LocalStorage sem o usuário excluído
    	localStorage.setItem('listaAtual', JSON.stringify(listaAtual));


    	// Fechar o modal após a exclusão e recarregar a tabela
    	modal.style.display = "none";
    	carregarTabela(); // Recarregar a tabela após exclusão
    }
    // Ouvinte de evento para fechar o modal ao clicar fora dele
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

/*-----------------------------------------------------------------------------------------------*/

let spans = document.getElementsByClassName("close");
for (let span of spans) {
    span.onclick = function () {
        document.getElementById("cadModal").style.display = "none"
        document.getElementById("empModal").style.display = "none"
        document.getElementById("devModal").style.display = "none"
        document.getElementById("modalExcluir").style.display = "none"
    }

}
function esconder() {
    document.getElementById("cadModal").style.display = "none"
    document.getElementById("empModal").style.display = "none"
    document.getElementById("devModal").style.display = "none"
    // document.getElementById("lisModal").style.display = "none"
}

function mostrarcad() {
    esconder()
    document.getElementById("cadModal").style.display = "block"
    let modal = document.getElementById("cadModal")
    //let span = document.getElementsByClassName("close")[0]
    // span.onclick = function () {
    //     modal.style.display = "none"
    // }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    }
}

function mostraremp() {
    esconder()
    document.getElementById("empModal").style.display = "block"
    let modal = document.getElementById("empModal")
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    }
}

function mostrardev() {
    esconder()
    document.getElementById("devModal").style.display = "block"
    let modal = document.getElementById("devModal")
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    }
}

function mostrarlis() {
    esconder()
    document.getElementById("lisModal").style.display = "block"
}