document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('cadModal')
    form.addEventListener('submit', function(event){
        event.preventDefault()
        const ferramenta = document.getElementById('tool').value
        const quantia = document.getElementById('quantidade').value
        let itens = JSON.parse(localStorage.getItem('itens')) || []
        let id = itens.lenght ? itens[itens.lenght - 1].id + 1 : 1
        while(itens.some(item => item.id === id)) {
            id++
        }
        // let id = Date.now()
        const item ={id, ferramenta, quantia }
        itens.push(item)
        localStorage.setItem('itens', JSON.stringify(itens))
        modal.style.display = "block"
        form.reset()
    })
})

let modal = document.getElementById("cadModal")
let span = document.getElementsByClassName("close")[0]
span.onclick = function(){
    modal.style.display = "none"
}
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none"
    }
}

function esconder(){
    document.getElementById("cadModal").style.display = "none"
    document.getElementById("empModal").style.display = "none"
    document.getElementById("devModal").style.display = "none"
    // document.getElementById("lisModal").style.display = "none"
}

function mostrarcad(){
    esconder()
    document.getElementById("cadModal").style.display = "block"
}

function mostraremp(){
    esconder()
    document.getElementById("empModal").style.display = "block"
}

function mostrardev(){
    esconder()
    document.getElementById("devModal").style.display = "block"
}

function mostrarlis(){
    esconder()
    document.getElementById("lisModal").style.display = "block"
}