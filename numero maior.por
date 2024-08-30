programa {
  funcao inicio() {
    real x, y
    escreva("digite um numero para X: ")
    leia(x)
    escreva("digite um numero para Y: ")
    leia(y)
    se(x>y){
      escreva("X:" +x +" > " +"Y:" +y)
    }
    senao se(y>x){
      escreva("Y:" +x +" > " +"X:" +y)
    }
    senao se(x == y){
    escreva("X = Y")
    }
  }
}
