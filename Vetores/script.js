let batatas = []
function add(){
    let produto = document.getElementById("txt").value
    let existe = false
    for(let item of batatas){
        if(item.toUpperCase() == produto.toUpperCase()){
            existe = true
            break
        }
    }
    if(existe == false){
        batatas.push(produto)
        document.getElementById("lista").innerHTML = batatas //mostra o valor da variavel "batatas" no paragrafo da lista
    }
    else{
        alert(produto+" Já Cadastrado")
    }
}

function remove(){
    let produto = document.getElementById("txt").value
    let posicao = -1
    //let posicao = batatas.indexOf(produto.toUpperCase())
    for(let item of batatas){
        if(item.toUpperCase() == produto.toUpperCase()){
            posicao = batatas.indexOf(item)
            break
        }
    }
    if(posicao == -1){
        alert(produto+" Não Cadastrado!")
    }
    else{
        batatas.splice(posicao, 1)
        document.getElementById("lista").innerHTML = batatas
    }
}

function edit(){
    let produto = document.getElementById("txt").value
    for(let pos = 0; pos < batatas.length; pos++){
        if(batatas[pos].toUpperCase() == produto.toUpperCase()){
            batatas[pos] = prompt("Digite o novo nome")
            break
        }
    }
    document.getElementById("lista").innerHTML = batatas
    /*for(let item of batatas){
        if(item.toUpperCase() == produto.toUpperCase()){
            item = prompt("Digite o novo nome para "+item)
            break
        }
    }
    document.getElementById("lista").innerHTML = batatas*/
}