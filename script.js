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
    let codigo, qtd, preco, total
    codigo = Number(prompt("Selecione um código\n 1 - cachorro-quente\n 2 - X-salada\n 3 - X- bacon\n 4 - Torrada simples\n 5 - Refrigerante"))
    qtd = Number(prompt("Quantidade desejada: "))
    if(codigo == 1){
        preco = 4 * qtd
        //alert("Valor Total: R$"+preco)
    }
    else if(codigo ==2){
        preco = 4.50 * qtd
        //alert("Valor Total: R$"+preco)
    }
    else if(codigo ==3){
        preco = 5 * qtd
        //alert("Valor Total: R$"+preco)
    }
    else if(codigo ==4){
        preco = 2 * qtd
        //alert("Valor Total: R$"+preco)
    }
    else if(codigo ==5){
        preco = 1.50 * qtd
        //alert("Valor Total: R$"+preco)
    }
    alert("Valor Total: R$"+preco.toFixed(2))
}