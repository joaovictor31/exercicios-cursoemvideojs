
let data = new Date();
let dia = data.getDate();
let hora = data.getHours();
let minutos = data.getMinutes();
console.log(`Agora são ${hora} horas e ${minutos} minutos`);

let frase = document.querySelector(".subtitulo");
frase.innerText = `Agora são ${hora} horas`
