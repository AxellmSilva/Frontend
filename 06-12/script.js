
const botao = document.getElementById("btn")
const texto = document.getElementById("texto")

const botao2 = document.getElementById("btn2")
const meuParagrafo = document.getElementById("meuParagrafo")

const botao3 = document.getElementById("btn3")

const meuParagrafo2 = document.getElementById("paragrafo3")

//Pega o elemento com o id 'formulario' e o armazena em uma variável
const form = document.getElementById("formulario")
//Pega o elemento com o id "mensagem" e o armazena em uma variável
const campoTexto = document.getElementById("mensagem")


function alteraTexto(){
    texto.style.color = "blue"
    //texto.innerText = "O texto foi alterado"
    texto.textContent = "O texto foi alterado"
}

/*
function alteraTexto2 (){
    if(meuParagrafo.textContent === "Texto original"){
        meuParagrafo.textContent = "Você passou o mouse por cima" 
    }else{
        meuParagrafo.textContent = "Texto original"
    }
    
}*/

function passeMouse(){
    meuParagrafo.textContent = "Você passou o mouse por cima"

}

function tireMouse(){
    meuParagrafo.textContent = "Você tirou o mouse por cima"
}

function cliqueDuasVezes(){
    alert("Você clicou duas vezes")
}

/*function pressionaTecla(event){
    meuParagrafo2.textContent = "Tecla Pressionada: " + event.key
    //meuParagrafo2.textContent += event.key
}*/

document.addEventListener("keydown", function (event){
    meuParagrafo2.textContent = "Tecla Pressionada: " + event.key
})

//document.addEventListener("keydown", pressionaTecla)

botao.addEventListener("click", alteraTexto)//chama a função quando clico no elemento
botao2.addEventListener("mouseover", passeMouse)//chama a função quando passo o cursor do mouse por cima
botao2.addEventListener("mouseout", tireMouse)//chama a função quando tiro o cursor do mouse por cima
botao3.addEventListener("dblclick", cliqueDuasVezes)//chama a função quando clico duas vezes

//Adiciona um evento que ocorre quando clicamos no botão 'submit', ou seja, quando enviamos os dados do formulário
form.addEventListener('submit', function(event){
    event.preventDefault(); //Evita o envio real do formulário
    alert('Formulário enviado')
})

//Evento de foco no campo de texto
campoTexto.addEventListener('focus', function(){
    campoTexto.style.backgroundColor = "yellow"
})

//Evento de blur no camp de texto(blur é quando perde o foco)
campoTexto.addEventListener('blur', function(){
    campoTexto.style.backgroundColor = "white"
})

campoTexto.addEventListener('change', function(){
    console.log("Valor alterado para: " + campoTexto.value);
})

//Evento de rolagem da página
window.addEventListener('scroll', function(){
    console.log("A página foi rolada. Posição de scroll" + window.scrollY);
})