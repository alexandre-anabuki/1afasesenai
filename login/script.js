let bancoDeDados = []
function add(){
    let usuario = {
        username:document.getElementById("username").value.toUpperCase(),
        password:document.getElementById("senha").value
    }
    //let usuario = document.getElementById("username").value
    //let pos = bancoDeDados.indexOf(usuario.toUpperCase())
    if(existe(usuario.username) == false){
        bancoDeDados.push(usuario)
        alert("Usuário Cadastrado com Sucesso!")
        document.getElementById("username").value = null
        document.getElementById("senha").value = null
    }
    else{
        alert("Usuário já Possui Cadastrado!")
    }
}
function login(){
    let usuario = document.getElementById("user").value.toUpperCase()
    let senha = document.getElementById("pass").value
    //let pos = bancoDeDados.indexOf(usuario.toUpperCase())
    if(autentica(usuario, senha) == false){
        alert("Falha de autentificação!")
    }
    else{
        alert("Bem-vindo")
    }
    document.getElementById("user").value = null
    document.getElementById("pass").value = null
}

function remove(){
    let username = document.getElementById("userDelete").value.toUpperCase()
    let pos = indexOfbyJack(username)
    if(pos != -1){
        bancoDeDados.splice(pos, 1)
        alert("Usuário: " +username +" foi Removido!")
    }
    else{
        alert("Sem Registro de Usuário!")
    }
    //let pos = bancoDeDados.indexOf(username.toUpperCase())
    /*for(let cad of bancoDeDados){
        if(cad.toUpperCase() == usuario.toUpperCase()){
            pos = bancoDeDados.indexOf(cad)
            break
        }
    }*/
    /*if(pos == -1){
        alert("Sem Registro de Usuário!")
    }
    else{
        bancoDeDados.splice(pos, 1)
        alert("Usuário " +usuario +" foi Removido!")
    }
    document.getElementById("userDelete").value = null*/
}

function edit(){
    let username = document.getElementById("userEdit").value
    let pos = bancoDeDados.indexOf(username.toUpperCase())
    if(pos == -1){
        alert("Usuário não encontrado no banco de dados")
    }
    else{
        let novo = prompt("Digite um novo usuário").toUpperCase()
        bancoDeDados[pos] = novo
        alert("Usuário: " +username +", foi alterado para: " +novo)
    }
    /*-----------------------------------------------------------------------*/
    /*let cad = prompt("Digite um usuário que já está cadastrado: ")
    let pos = bancoDeDados.indexOf()
    for(let n = 0; n<bancoDeDados.length; n++){
        if(bancoDeDados[pos].toUpperCase() == cad.toUpperCase()){
            let usuario = prompt("Digite o novo cadastro: ")
            if(pos == -1){
                bancoDeDados[pos] = usuario
                alert("Usuário editado com sucesso!")
            }
            else{
                alert("Usuário já tem cadastro!")
            }
        }
        if(pos == -1){
            alert("Usuário Não Registrado!")
        }
    }*/
    /*------------------------------------------------------------------------*/
    /*let usuario = document.getElementById("userEdit").value
    let pos = bancoDeDados.indexOf(usuario.toUpperCase())
    for(let cad of bancoDeDados){
        if(cad.toUpperCase() == usuario.toUpperCase()){
            alert("Usuário já Registrado")
        }
    }
    if(pos == -1){
        alert("Sem Registro de Usuário!")
    }
    else{
        bancoDeDados[pos] = usuario
        //alert("Usuário: "+pos +" ,Foi alterado para: "+usuario)
        alert("Usuário foi editado!")
    }*/
    document.getElementById("userDelete").value = null
}

function existe(username){
    for(let usuario of bancoDeDados){
        if(usuario.username == username){
            return true
        }
    }
    return false
    /*let pos = bancoDeDados.indexOf(username.toUpperCase())
    if(pos == -1){
        return false
    }
    else{
        return true
    }*/
}

function autentica(username, password){
    for(let usuario of bancoDeDados){
        if(usuario.username == username && usuario.password == password){
            return true
        }
    }
    return false
}

function indexOfbyJack(username){
    for(let usuario of bancoDeDados){
        if(usuario.username == username){
            return bancoDeDados.indexOf(usuario)
        }
    }
    return -1
}