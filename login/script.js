let bancoDeDados = []
function add(){
    let usuario = document.getElementById("username").value
    let pos = bancoDeDados.indexOf(usuario.toUpperCase())
    if(pos == -1){
        bancoDeDados.push(usuario.toUpperCase())
        alert("Usuário Cadastrado com Sucesso!")
        document.getElementById("username").value = null
    }
    else{
        alert("Usuário Já Está Cadastrado!")
    }
}
function login(){
    let usuario = document.getElementById("user").value
    let pos = bancoDeDados.indexOf(usuario.toUpperCase())
    if(pos == -1){
        alert("Usuário não cadastrado")
    }
    else{
        alert("Bem-vindo")
    }
    document.getElementById("user").value = null
}

function remove(){
    let usuario = document.getElementById("userDelete").value
    let pos = bancoDeDados.indexOf(usuario.toUpperCase())
    /*for(let cad of bancoDeDados){
        if(cad.toUpperCase() == usuario.toUpperCase()){
            pos = bancoDeDados.indexOf(cad)
            break
        }
    }*/
    if(pos == -1){
        alert("Sem Registro de Usuário!")
    }
    else{
        bancoDeDados.splice(pos, 1)
        alert("Usuário " +usuario +" foi Removido!")
    }
    document.getElementById("userDelete").value = null
}

/*function edit(){
    let usuario = document.getElementById("userEdit").value
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
    }
    document.getElementById("userDelete").value = null
}*/
