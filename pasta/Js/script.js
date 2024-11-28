const pessoa = {}

function mostrar(){
    nome = document.getElementById('fname').value;
    Sobrenome = document.getElementById('lname').value;
    email = document.getElementById('email').value;
    senha = document.getElementById('password').value;
    telefone = document.getElementById('telefone').value;


    pessoa.nome = nome;
    pessoa.Sobrenome = Sobrenome;
    pessoa.email = email;
    pessoa.senha = senha;
    pessoa.telefone = telefone;

    document.getElementById('nomeResultado').innerHTML = pessoa.nome;
    document.getElementById('sobrenomeResultado').innerHTML = pessoa.Sobrenome;
    document.getElementById('emailResultado').innerHTML = pessoa.email;
    document.getElementById('senhaResultado').innerHTML = pessoa.senha;
    document.getElementById('telefoneResultado').innerHTML = pessoa.telefone;


}
