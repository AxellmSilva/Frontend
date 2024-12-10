// Selecionando os elementos

const botaoMudar = document.getElementById('botao-mudar')
const descricoes = document.getElementsByClassName("descricao")
const botaoAdicionar = document.getElementById('botao-adicionar')
const botaoRemover = document.getElementById('botao-remover')
const botaoRemoverClass = document.getElementById("botaoRemoverClass")


//Mudando o texto do título quando o botão é clicado
botaoMudar.addEventListener("click", function(){
    descricoes[0].textContent = "Parágrafo modificado"
})

botaoAdicionar.addEventListener("click", function(){
const novoParagrafo = document.createElement('p')
novoParagrafo.textContent = "Novo parágrafo criado"
document.body.appendChild(novoParagrafo)
})

botaoRemover.addEventListener("click", function(){
    descricoes[0].remove()
})

botaoRemoverClass.addEventListener('click', function(){
    const  novoP = document.getElementsByClassName('novoP')
    novoP[0].classList.remove('novoP')
})

let eventoTempo = setTimeout(function(){
    console.log("Executado após 2 segundos")
}, 2000)

let eventoIntervalo = setInterval(function(){
    console.log("Executado após 2 segundos")
}, 2000)