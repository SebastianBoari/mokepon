let ataqueJugador = "";
let ataqueEnemigo = "";
let vidasJugador = 3;
let vidasEnemigo = 3;

// Variables funcion iniciarJuego()
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const sectionReiniciar = document.getElementById('reiniciar');
const botonMascotaJugador = document.getElementById('boton-mascota');
const botonFuego = document.getElementById('boton-fuego');
const botonAgua = document.getElementById('boton-agua');
const botonTierra = document.getElementById('boton-tierra');
const botonReiniciar = document.getElementById('boton-reiniciar');
// Variables funcion seleccionarMascotaJugador()
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
const inputHipodoge = document.getElementById('hipodoge');
const inputCapipepo = document.getElementById('capipepo');
const inputRatigueya = document.getElementById('ratigueya');
const spanMascotaJugador = document.getElementById('mascota-jugador');
// Variables funcion seleccionarMasctoaEnemigo()
const spanMascotaEnemigo = document.getElementById('mascota-enemigo');
// Variables funcion combate()
const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');
// Variables funcion crearMensaje()
const spanAtaqueEnemigo = document.getElementById('ataque-enemigo')
const spanAtaqueJugador = document.getElementById('ataque-jugador');
// Variables funcion crearMensajeFinal()
const sectionMensajes = document.getElementById('resultado-final');

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none';
    sectionReiniciar.style.display = 'none';
    botonMascotaJugador.addEventListener('click', seleccionarMasctoaJugador);
    botonFuego.addEventListener('click', ataqueFuego);
    botonAgua.addEventListener('click', ataqueAgua);
    botonTierra.addEventListener('click', ataqueTierra);
    botonReiniciar.addEventListener('click', reiniciarJuego);
}
function seleccionarMasctoaJugador(){
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex';
    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge';
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo';
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya';
    } else {
        alert('Selecciona una mascota');
    }    
    seleccionarMasctoaEnemigo();
}
function seleccionarMasctoaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3);
    if (mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge';
    } else if (mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo';
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya';
    }
}
function ataqueFuego() {
    ataqueJugador = 'FUEGO';
    ataqueAleatorioEnemigo();
}
function ataqueAgua() {
    ataqueJugador = 'AGUA';
    ataqueAleatorioEnemigo();
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA';
    ataqueAleatorioEnemigo();
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO';
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA';
    } else {
        ataqueEnemigo = 'TIERRA';
    }
   combate()
}
function combate(){
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje('EMPATE');
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje('GANASTE');
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo; 
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje('GANASTE');
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo; 
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje('GANASTE');
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo; 
    } else {
        crearMensaje('PERDISTE');
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador; 
    }
    revisarVidas();
}
function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal('GANASTE');
    } else if (vidasJugador == 0){
        crearMensajeFinal('PERDISTE');
    }
}
function crearMensaje(resultado) {
    let resultadoJugador = document.createElement('p');
    resultadoJugador.innerHTML =  `${ataqueJugador} - ${resultado}`;
    resultadoJugador.classList.add('resultado-jugador');
    let resultadoEnemigo = document.createElement('p');
    resultadoEnemigo.innerHTML =  ataqueEnemigo;
    resultadoEnemigo.classList.add('resultado-enemigo');
    spanAtaqueJugador.appendChild(resultadoJugador);
    spanAtaqueEnemigo.appendChild(resultadoEnemigo);
}
function crearMensajeFinal(resultadoFinal) {
    let parrafo = document.createElement('p');
    parrafo.innerHTML = resultadoFinal;
    parrafo.classList.add('mensaje-final');
    sectionMensajes.appendChild(parrafo);
    botonFuego.disabled = true;
    botonAgua.disabled = true;
    botonTierra.disabled = true;
    sectionReiniciar.style.display = 'flex';
}
function reiniciarJuego(){
    location.reload();
}
function aleatorio(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min);
}
window.addEventListener('load', iniciarJuego);