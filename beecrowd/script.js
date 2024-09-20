function executar1008(){
    let id, horas, valorhora, salario
    id = Number(prompt("Digite seu id: "))
    horas = Number(prompt("Quantas horas você trabalhou?"))
    valorhora = Number(prompt("Quanto você ganha por hora?"))
    
    salario = horas * valorhora

    alert("ID: "+id +"\nSalário: R$" +salario.toFixed(2))
}

function exe1009(){
   let id, salario, vendas, total//, lucro
   id = prompt("Nome: ")
   salario = Number(prompt("Salário fixo: "))
   vendas = Number(prompt("Vendas efetuadas do mês: "))

   //lucro = vendas * 15/100
   total = salario + (vendas * 15/100)

   alert(id +" recebeu R$ "+total.toFixed(2) +" este mês.")
}

function exe1038(){
    let codigo, qtd, preco
    codigo = Number(prompt("Selecione um código\n 1 - cachorro-quente\n 2 - X-salada\n 3 - X- bacon\n 4 - Torrada simples\n 5 - Refrigerante"))
    qtd = Number(prompt("Quantidade desejada: "))
    if(codigo == 1){
        preco = 4 * qtd
        //alert("Valor Total: R$"+preco)
    }
    else if(codigo == 2){
        preco = 4.50 * qtd
        //alert("Valor Total: R$"+preco)
    }
    else if(codigo == 3){
        preco = 5 * qtd
        //alert("Valor Total: R$"+preco)
    }
    else if(codigo == 4){
        preco = 2 * qtd
        //alert("Valor Total: R$"+preco)
    }
    else if(codigo == 5){
        preco = 1.50 * qtd
        //alert("Valor Total: R$"+preco)
    }
    else{
        alert("Código inválido")
    }
    alert("Valor Total: R$"+preco.toFixed(2))
}

function exe1050(){
    let x = Number(prompt("escolha um DDD: "))
    if(x == 61){
        alert("Brasilia")
    }
    else if(x == 71){
        alert("Salvador")
    }
    else if(x == 11){
        alert("São Paulo")
    }
    else if(x == 21){
        alert("Rio de Janeiro")
    }
    else if(x == 32){
        alert("Juiz de Fora")
    }
    else if(x == 19){
        alert("Campinas")
    }
    else if(x == 27){
        alert("Vitoria")
    }
    else if(x == 31){
        alert("Belo Horizaonte")
    }
    else{
        alert("DDD inválido")
    }
}

function exe1115(){
    let x = 1
    let y = 1
    while(x != 0 && y != 0){
        x = Number(prompt("Digite um coordenada X: "))
        y = Number(prompt("Digite um coordenada Y: "))
        if(x > 0 & y > 0){
            alert("Primeiro quadrante")
        }
        else if(x < 0 & y > 0){
            alert("Segundo quadrante")
        }
        else if(x < 0 & y < 0){
            alert("Terceiro quadrante")
        }
        else if(x > 0 & y < 0){
            alert("Quarto quadrante")
        }
        //let x = Number(prompt("Digite um coordenada X: "))
        //let y = Number(prompt("Digite um coordenada Y: "))
    }
}