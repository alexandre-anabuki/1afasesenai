const ferramenta = document.getElementById("tool")
const quantidade = document.getElementById("qtd")
const edferramenta = document.getElementById("edtool")
const edquantidade = document.getElementById("edqtd")

function crude(){
    window.location.href = "crude.html"
}

function home(){
    window.location.href = "index.html"
}

function cad(){
    const item = {
        componente: ferramenta.value,
        quantia: quantidade.value
    }
    let inventario = JSON.parse(localStorage.getItem("inventario"))
    if(inventario == null){
        inventario = []
    }
    inventario.push(item)
    localStorage.setItem("invetario", JSON.stringify(inventario))
    alert("Item: "+ferramenta +", cadastrado com sucesso!")
    ferramenta.value = null
    quantidade.value = null
}