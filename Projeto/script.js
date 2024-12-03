document.addEventListener('DOMContentLoaded', (event) => {
    //let modal = document.getElementById("cadModal")
    //let confirmacad = document.getElementById("cofirmaCad")
    const form = document.getElementById('cadForm')
    form.addEventListener('submit', function (event) {
        event.preventDefault()
        const ferramenta = document.getElementById('tool').value
        const quantia = document.getElementById('quantidade').value
        let itens = JSON.parse(localStorage.getItem('itens')) || []
        let id = itens.lenght ? itens[itens.lenght - 1].id + 1 : 1
        while (itens.some(item => item.id === id)) {
            id++
        }
        // let id = Date.now()
        const item = { id, ferramenta, quantia }
        itens.push(item)
        localStorage.setItem('itens', JSON.stringify(itens))
        modal.style.display = "block"
        form.reset()
    })
    // confirmacad.onclick = function () {
    //     modal.style.display = "none";
    //     carregarTabela();
    // }
    /*function carregarTabela() {
        let itens = JSON.parse(localStorage.getItem('itens')) || []
        // Função para carregar e exibir os dados da tabela
        const tabela = document.getElementById('listageral').getElementsByTagName('tbody')[0];
        tabela.innerHTML = '';
        // Obter os usuários armazenados no LocalStorage ou um array vazio se não houver dados
        // Iterar sobre cada usuário para criar as linhas da tabela dinamicamente
        for (let item of itens) {
            let linha = tabela.insertRow();
            let celulaNome = linha.insertCell(0);
            let celulaFerramenta = linha.insertCell(1);
            let celulaQuantia = linha.insertCell(2);
            let celulaEmp = linha.insertCell(3);
            let celulaAcoes = linha.insertCell(4);
            // Preencher as células com os dados do usuário
            celulaNome.innerHTML = "----x----";
            celulaFerramenta.innerHTML = item.ferramenta;
            celulaQuantia.innerHTML = item.quantia;
            celulaEmp.innerHTML = "----x----"
            // Adicionar um botão de excluir na célula de Ações com atributos de dados para ID e nome do usuário
            celulaAcoes.innerHTML = `<button class="excluirBtn" data-id="${item.id}" data-nome="${item.nome}">Excluir</button>`;
        }
        // Adicionar um ouvinte de evento para cada botão de excluir gerado dinamicamente
        let botoes = document.querySelectorAll('.excluirBtn');
            for(let button of botoes){
            button.addEventListener('click', function() {
                let nomeUsuario = this.getAttribute('data-nome');
                let idUsuario = this.getAttribute('data-id');
                mostrarModal(nomeUsuario, idUsuario); // Chamar função para exibir o modal de confirmação
            });
        };
    }
    carregarTabela(); // Chamar a função para carregar a tabela quando o documento é carregado
    // Definição das variáveis para o modal de confirmação
    let modal = document.getElementById("modalExcluir");
    let span = document.getElementsByClassName("close")[0];
    let confirmarExcluir = document.getElementById("confirmarExcluir");
    let cancelarExcluir = document.getElementById("cancelarExcluir");
    let usuarioNomeElemento = document.getElementById("usuarioNome");
    let usuarioParaExcluirId = '';
    function mostrarModal(nomeUsuario, idUsuario) {
        usuarioParaExcluirId = idUsuario;
        usuarioNomeElemento.textContent = nomeUsuario;
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
        let usuarios = JSON.parse(localStorage.getItem('itens')) || [];
        // Filtrar o usuário a ser excluído pelo ID
        usuarios = usuarios.filter(usuario => usuario.id != usuarioParaExcluirId);
        // Atualizar o LocalStorage sem o usuário excluído
        localStorage.setItem('itens', JSON.stringify(usuarios));
        // Fechar o modal após a exclusão e recarregar a tabela
        modal.style.display = "none";
        carregarTabela(); // Recarregar a tabela após exclusão
    }
    // Ouvinte de evento para fechar o modal ao clicar fora dele
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }*/
})

document.addEventListener('DOMContentLoaded', (event) => {
    // Esta função é executada quando o documento HTML é completamente carregado
    function carregarTabela() {
        // Função para carregar e exibir os dados da tabela
        const tabela = document.getElementById('listageral').getElementsByTagName('tbody')[0];
        tabela.innerHTML = '';
        // Obter os usuários armazenados no LocalStorage ou um array vazio se não houver dados
        let itens = JSON.parse(localStorage.getItem('itens')) || [];
        // Iterar sobre cada usuário para criar as linhas da tabela dinamicamente
        for (let item of itens) {
            let linha = tabela.insertRow();
            let celulaNome = linha.insertCell(0);
            let celulaFerramenta = linha.insertCell(1);
            let celulaQuantia = linha.insertCell(2);
            let celulaEmp = linha.insertCell(3);
            let celulaAcoes = linha.insertCell(4);
            // Preencher as células com os dados do usuário
            celulaNome.innerHTML = item.nome;
            celulaFerramenta.innerHTML = item.ferramenta;
            celulaQuantia.innerHTML = item.quantia;
            celulaEmp.innerHTML = item.emp;
            // Adicionar um botão de excluir na célula de Ações com atributos de dados para ID e nome do usuário
            celulaAcoes.innerHTML = `<button class="excluirBtn" data-id="${item.id}">Excluir</button>`;
        }
        // Adicionar um ouvinte de evento para cada botão de excluir gerado dinamicamente
        let botoes = document.querySelectorAll('.excluirBtn');
        for (let button of botoes) {
            button.addEventListener('click', function () {
                //let nomeUsuario = this.getAttribute('data-nome');
                let idUsuario = this.getAttribute('data-id');
                mostrarModal(idUsuario); // Chamar função para exibir o modal de confirmação
            });
        };
    }
    carregarTabela(); // Chamar a função para carregar a tabela quando o documento é carregado
    // Definição das variáveis para o modal de confirmação
    let modal = document.getElementById("modalExcluir");
    let confirmarExcluir = document.getElementById("confirmarExcluir");
    let cancelarExcluir = document.getElementById("cancelarExcluir");
    //let usuarioNomeElemento = document.getElementById("usuarioNome");
    let usuarioParaExcluirId = '';
    // Função para exibir o modal de confirmação
    function mostrarModal(idUsuario) {
        usuarioParaExcluirId = idUsuario;
        //usuarioNomeElemento.textContent = nomeUsuario;
        modal.style.display = "block";
    }
    // Ouvinte de evento para fechar o modal quando clicar no 'x'
    // Ouvinte de evento para fechar o modal ao clicar no botão Cancelar
    cancelarExcluir.onclick = function () {
        modal.style.display = "none";
    }
    // Ouvinte de evento para confirmar a exclusão quando clicar no botão Excluir
    confirmarExcluir.onclick = function () {
        // Obter os usuários do LocalStorage ou um array vazio se não houver dados
        let itens = JSON.parse(localStorage.getItem('itens')) || [];
        // Filtrar o usuário a ser excluído pelo ID
        itens = itens.filter(item => item.id != usuarioParaExcluirId);
        // Atualizar o LocalStorage sem o usuário excluído
        localStorage.setItem('itens', JSON.stringify(itens));
        // Fechar o modal após a exclusão e recarregar a tabela
        modal.style.display = "none";
        carregarTabela(); // Recarregar a tabela após exclusão
    }
    // Ouvinte de evento para fechar o modal ao clicar fora dele
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

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
}

function mostrardev() {
    esconder()
    document.getElementById("devModal").style.display = "block"
}

function mostrarlis() {
    esconder()
    document.getElementById("lisModal").style.display = "block"
}

