
function calcularIMC(){
    let peso = document.getElementById("inpPeso").value
    let altura = document.getElementById("inpAltura").value

    let imc = peso / (altura**2)

    //document.getElementById("inpResultado").value = "seu IMC é : " +imc

    document.getElementById("pResultado").innerHTML = "seu IMC é : " +imc.toFixed(2)
    //alert("O IMC é : " +imc)
    //console.log(peso)
}

function idadeCao(){
    let idade = document.getElementById("idadeD").value
    let age = idade * 7
    if(age < 64){
        document.getElementById("pIdade").innerHTML = "Seu cachorro ainda é JOVEM pois tem : " +age +" anos humanos"
    }
    else{
        document.getElementById("pIdade").innerHTML = "Seu cachorro ainda é IDOSO pois tem : " +age +" anos Humanos"
    }
}