let resposta = document.getElementById('texto');
let procura = document.querySelector('#procurar');
let botao = document.querySelector('.botao')
let aviso = document.querySelector('.aviso');


function mostra (){
    let respostav = resposta.value;
    let procurav = procura.value;

    if (respostav.includes(procurav)){
        aviso.textContent = 'O texto CONTÉN a palavra'
    } else {
        aviso.textContent = 'O texto NÃO CONTÉN a palavra'
    }
   
}

botao.addEventListener('click', mostra)