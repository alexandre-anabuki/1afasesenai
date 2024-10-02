function conta1n(){
    let n = Number(prompt("Insira um quantidade de números á contar:"))
    let x = 1
    while(x <= n){
        alert(x)
        x++
    }
}

function soma(){
    let x = Number(prompt("Digite um número para adicionar ao somatório ou insira zero para mostrar o resultado final"))
    let r = 0
    while(x != 0){
        r += x
         x = Number(prompt("Digite um número para adicionar ao somatório ou insira zero para mostrar o resultado final"))
    }
    alert(r)
    /*if(x != 0){
        let y = Number(prompt("Digite um número para adicionar ao somatório ou insira zero para mostrar o resultado final"))
        while(y !== 0){
            x = y + x
        }
        alert(x)
    }
    else{
        alert(x)
    }*/
}

function median(){
    let x = Number(prompt("Digite uma quantidade de números"))
    let r = 0
    for(let n = 0; n < x; n++){
        let y = Number(prompt("Digite um valor"))
        r += y
    }
    let w = r/x
    alert("A média é: "+w)
}

function fatorialn(){
    let x = Number(prompt("Digite um valor a ser fatorado:"))
    let r = 1
    for(let n = 1; n <= x; n++){
        r = r * n
    }
    alert(r)
}

function tabela(){
    let x = Number(prompt("Digite um número que será multiplicado de 1 até 10!"))
    let r = "" //os "" é para adicionar um texto e para não dar um valor nulo para variável
    for(let n = 1; n <= 10; n++){
        r += "\n" +x+" x "+n+" = "+(n*x)
        //let r = x * n
        //alert(r)
    }
    alert(r)
}

function pares(){
    let x = Number(prompt("Digite um valor no qual será mostrado somente os número pares desse valor"))
    let r = ""
    for(let n = 1; n <= x; n++){
        if(n % 2 == 0){
            r += n+", "
            //alert(n)
        }
    }
    alert(r)
}

function passo(){
    let x = Number(prompt("Digite um valor que será contado de 1 até esse número"))
    let y = Number(prompt("Digite um valor para o passo da contagem"))
    let n = 1
    while(n < x){
        alert(n)
        n += y
    }
    /*let n = 0
    let r = 1
    alert(r)
    while(n < x){
        r += y
        if(r <= x){
            alert(r)
        }
        n += y
    }*/
}

function impares(){
    let x = Number(prompt("Digite um valor no qual será mostrado somente os número ímpares desse valor"))
    let r = ""
    for(let n = 1; n <= x; n++){
        if(n % 2 != 0){
            r += n+", "
            //alert(n)
        }
    }
    alert(r)
}

function multiplos(){
    let x = Number(prompt("Digite um valor para X:"))
    let y = Number(prompt("Digite um valor para Y:"))
    /*if (x % 2 == 0 ){ //meu modelo
        if(y % 2 == 0){
            alert(x +" e "+y+" são múltiplos")
        }
    }
    else{
        alert(x +" e "+y+" não são múltiplos")
    }*/
    /*-----------------------------------------------*/
    /*if(y % x == 0){ //modelo do professor
        alert("são múltiplos")
    }
    else{
        alert("não são múltiplos")
    }*/
    /*---------------------------------------------------*/
    if(y > x){
        if(y % x == 0){
            alert(x +" e "+y+" são múltiplos")
        }
        else{
            alert(x +" e "+y+" não são múltiplos")
        }
    }
    else if(x >= y){
        if(x % y == 0){
            alert(x +" e "+y+" são múltiplos")
        }
        else{
            alert(x +" e "+y+" não são múltiplos")
        }
    }
    
}

function primos(){
    let x = Number(prompt("Digite um número: ")) 
    let y = 0
    for(let n =1; n <= x; n++){
        if(x % n ==0){
            y++
        }
    }
    if(y == 2){
        alert(x+" é primo")
    }
    else{
        alert(x+" não é primo")
    }
}

function verificaprimos(x){
    let y = 0
    for(let n =1; n <= x; n++){
        if(x % n ==0){
            y++
        }
    }
    if(y == 2){
        return true
    }
    else{
        return false
    }
}

function desafio(){
    let x = Number(prompt("Digite um número: "))
    let r = ""
    //let i = 1
    for(let n = 1; n <= x; n++){//while(i <= x){
        if(verificaprimos(n) == true){
            r += n+", "
        }
        /*else{
            alert(n+" não é primo")
        }*/
        //i++
    }
    alert(r)
}