
let data = new Date();
let dia = data.getDate();
let hora = data.getHours();
let minutos = data.getMinutes();

let frase = document.querySelector(".subtitulo");
let mensagem = document.querySelector(".mensagem")
let imagem = document.querySelector(".img-manha");
let principal = document.querySelector(".principal")


if (hora >= 12 && hora <= 17){
    imagem.setAttribute('src', "Ellipse 87.png");
    document.body.style.backgroundColor = "#4A96D9"
    principal.style.backgroundColor= "#356FA2"
    mensagem.innerText = 'Boa Tarde'
    frase.innerText = `Agora são ${hora} horas`
} else if (hora >= 18 && hora <= 23){
    imagem.setAttribute('src', "Ellipse 88.png");
    document.body.style.backgroundColor = "#011526"
    principal.style.backgroundColor = "#023859"
    mensagem.innerText = 'Boa Noite';
    frase.innerText = `Agora são ${hora} horas`
} else{
    frase.innerText = `Agora são ${hora} horas`
}
