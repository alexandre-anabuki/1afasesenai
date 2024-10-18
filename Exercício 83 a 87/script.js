let numeros = []
let index1, index2, soma
let resultados = []

function exe83(){
    let numero

    for(let i=0; i<25; i++){
        numero = Math.ceil(Math.random()*6)
        numeros.push(numero)
    }
    console.log(numeros)
    document.getElementById("resultado").innerHTML = "Array gerado com sucesso!"
}

function exe83b(){
    do{
        index1 = Number(prompt("Digite um número entre 0 e 24:"))     
    }while(index1 < 0 || index1 > 24)
    
    do{
        index2 = Number(prompt("Digite um número entre 0 e 24:"))     
    }while(index2 < 0 || index2 > 24)

    soma = numeros[index1] + numeros[index2]
    console.log("Soma: ", soma)
    document.getElementById("resultado").innerHTML = soma
}

function mostrar83(){
    document.getElementById("resultado").innerHTML = "<h2>Lançamento do dado:</h2>"
    for(let i=0; i<numeros.length; i++){
        document.getElementById("resultado").innerHTML += "Dado: " + numeros[i] + "<BR>"
    }
}

function pesquisa(){
    let valor = Number(prompt("Digite o valor para pesquisar: "))
    if(numeros.indexOf(valor) == -1){
        alert("Valor não encontrado!")
    }
    else{
        alert("Encontrado o valor: " + numeros.indexOf(valor))
    }
    /*-------------------------------------------------------------------------------------*/
    /*let busca = Number(prompt("Digite um valor para verificar no array: "))
    let indice = -1
    for(let n=0; n<numeros.length; n++){
        if(busca == numeros[n]){
            resultados.push(n)
            indice = n
            //alert("encontrado na posição: "+n)
        }
    }

    if(indice == -1){
        alert("Valor não encontrado!")
    }
    else{
        alert("Encontrado: " + indice)
    }*/
}