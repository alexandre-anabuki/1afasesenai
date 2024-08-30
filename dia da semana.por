programa {
  funcao inicio() {
    inteiro dia
    escreva ("insira um numero de 1 a 7: ")
    leia (dia)
    se (dia == 1){
      escreva ("DOMINGO")
    } senao se(dia == 2){
      escreva ("SEGUNDA")
    } senao se(dia == 3){
      escreva ("TERÇA")
    } senao se(dia == 4){
      escreva ("QUARTA")
    } senao se(dia == 5){
      escreva ("QUINTA")
    } senao se(dia == 6){
      escreva ("SEXTA")
    } senao se(dia == 7){
      escreva ("SABADO")
    } senao{
      escreva ("numero invalido\n")
      //inicio()
    }
  }
}
