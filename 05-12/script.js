// Primeiro, criamos uma variável e armazenamos o elemento que queremos dentro dela
const botao = document.getElementById("btn")
const botao2 = document.getElementById("btn2")

//Depois, criamos a função que faz o que queremos que o botão execute
function imprimeFrase(){
    alert("Click")
}

function trocaCorFundo(){
    botao.style.backgroundColor = "red"
    if(botao.style.backgroundColor("red")){
        botao.style.backgroundColor = "rgb(247, 164, 10)"
    }
}
//Por último, adicionamos um evento que vai executar a função quando alguma ação ocorrer. O primeiro parâmetro é a ação, o segundo parâmentro é a função que queremos executar
botao.addEventListener("click", imprimeFrase)
botao2.addEventListener("click", trocaCorFundo)