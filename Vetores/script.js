let batatas = []
function add(){
    let produto = document.getElementById("txt").value
    let posicao = batatas.indexOf(produto)
    if(posicao == -1){
        batatas.push(produto)
        document.getElementById("lista").innerHTML = batatas //mostra o valor da variavel "batatas" no paragrafo da lista
    }
    else{
        alert(produto+" Já Cadastrado")
    }

}

function remove(){
    let produto = document.getElementById("txt").value
    let posicao = batatas.indexOf(produto)
    if(posicao == -1){
        alert(produto+" Não Cadastrado!")
    }
    else{
        batatas.splice(posicao, 1)
        document.getElementById("lista").innerHTML = batatas
    }
}