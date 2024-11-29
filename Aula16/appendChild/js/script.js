function olaMundo(){

   let ola = document.getElementById('ola')
   ola.innerHTML="Olá mundo"

    let newDiv = document.createElement('div')

    newDiv.textContent = "Seja bem-vindo"

    newDiv.style.backgroundColor = "aliceblue"
    newDiv.style.border = '1px solid brown'
    newDiv.style.margin = "10px"

    ola.appendChild(newDiv)
}

function createUnorderList(){
    let body = document.querySelector("body")
    console.log(body)

    let newDiv = document.createElement('div')
    console.log(newDiv)

    body.appendChild(newDiv)
}