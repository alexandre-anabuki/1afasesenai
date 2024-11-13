const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("password");
const campoNovoLogin = document.getElementById("novoLogin");
const campoNovaSenha = document.getElementById("novaSenha");
const campoRepSenha = document.getElementById("repSenha");

function login(){
    let login = campoLogin.value
    let senha = campoSenha.value
    let mensagem = "Usuário ou senha INCORRETA!"
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")); //parse: converter um dado (neste caso para JSON)
    if (bancoDeDados == null) {
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
    // Lógica para verificar as credenciais de login
        for (let usuario of bancoDeDados) {
            if (usuario.login == login && usuario.senha == senha) {
                mensagem = "Parabéns, você logou!";                      //setItem: alterar
                localStorage.setItem("logado", JSON.stringify(usuario)); //stringify: transforma para cadeia de caracteres
                //fazer comando pra mundaça de página
                window.location.href = "home.html"
                break;
            }
        }    
    }
    alert(mensagem)
}

function cadastra(){
    if (campoNovaSenha.value == campoRepSenha.value) {
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value
        };
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (bancoDeDados == null) {
        bancoDeDados = [];
    }
    bancoDeDados.push(usuario);
    localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
    alert("Usuário cadastrado com sucesso!");
    campoNovoLogin.value = null
    campoNovaSenha.value = null
    campoRepSenha.value = null
    } else {
        alert("As senhas são diferentes!");
    }
}

function deslogar(){
    localStorage.setItem("logado", JSON.stringify(null))
    window.location.href = "index.html"
}

function carrega(){
    let usuariologado = JSON.parse(localStorage.getItem("logado"))
    let nome = usuariologado.login
    document.getElementById("nome").innerHTML = nome
}