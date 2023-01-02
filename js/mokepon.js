let mokepones = [];
let opcionDeMokepones ;
let inputHipodoge ;
let inputCapipepo ;
let inputRatigueya ;
let inputPydos ;
let inputTucapalma ;
let inputLangostelvis ;
let mascotaJugador ;
let ataqueJugador = [];
let ataqueEnemigo = [];
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;
let ataquesMokepon ;
let ataquesMokeponEnemigo ;
let botonFuego ;
let botonAgua ;
let botonTierra ;
let indexAtaqueJugador ;
let indexAtaqueEnemigo ;
let botones = [];
let petCard ;

const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const sectionReiniciar = document.getElementById('reiniciar');
const botonMascotaJugador = document.getElementById('boton-mascota');
const botonReiniciar = document.getElementById('boton-reiniciar');
const contenedorMascotas = document.getElementById('contenedor-mascotas');
const contenedorAtaques = document.getElementById('contenedor-ataques');
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
const spanMascotaJugador = document.getElementById('mascota-jugador');
const spanMascotaEnemigo = document.getElementById('mascota-enemigo');
const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');
const spanAtaqueEnemigo = document.getElementById('ataque-enemigo')
const spanAtaqueJugador = document.getElementById('ataque-jugador');
const sectionMensajes = document.getElementById('resultado-final');

class Mokepon {
    constructor (nombre, foto, vida, tipo) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.tipo = tipo;
        this.ataques = [];
    };
};

let hipodoge = new Mokepon('hipodoge', './img/mascotas/mokepons_mokepon_hipodoge_attack.png', 5);
let capipepo = new Mokepon('capipepo', './img/mascotas/mokepons_mokepon_capipepo_attack.png', 5);
let ratigueya = new Mokepon('ratigueya', './img/mascotas/mokepons_mokepon_ratigueya_attack.png', 5);
let pydos = new Mokepon('pydos', './img/mascotas/mokepons_mokepon_pydos_attack.png', 5);
let tucapalma = new Mokepon('tucapalma', './img/mascotas/mokepons_mokepon_tucapalma_attack.png', 5);
let langostelvis = new Mokepon('langostelvis', './img/mascotas/mokepons_mokepon_langostelvis_attack.png', 5);

hipodoge.ataques.push(
 { nombre: 'Agua', id: 'boton-agua' },
 { nombre: 'Agua', id: 'boton-agua' },
 { nombre: 'Agua', id: 'boton-agua' },
 { nombre: 'Fuego', id: 'boton-fuego'},
 { nombre: 'Tierra', id: 'boton-tierra'},
);
pydos.ataques.push(
{ nombre: 'Agua', id: 'boton-agua' },
{ nombre: 'Agua', id: 'boton-agua' },
{ nombre: 'Agua', id: 'boton-agua' },
{ nombre: 'Fuego', id: 'boton-fuego'},
{ nombre: 'Tierra', id: 'boton-tierra'},
);
capipepo.ataques.push(
{ nombre: 'Tierra', id: 'boton-tierra' },
{ nombre: 'Tierra', id: 'boton-tierra' },
{ nombre: 'Tierra', id: 'boton-tierra' },
{ nombre: 'Agua', id: 'boton-agua'},
{ nombre: 'Fuego', id: 'boton-fuego'},
);
tucapalma.ataques.push(
{ nombre: 'Tierra', id: 'boton-tierra' },
{ nombre: 'Tierra', id: 'boton-tierra' },
{ nombre: 'Tierra', id: 'boton-tierra' },
{ nombre: 'Agua', id: 'boton-agua'},
{ nombre: 'Fuego', id: 'boton-fuego'},
);
ratigueya.ataques.push(
{ nombre: 'Fuego', id: 'boton-fuego' },
{ nombre: 'Fuego', id: 'boton-fuego' },
{ nombre: 'Fuego', id: 'boton-fuego' },
{ nombre: 'Agua', id: 'boton-agua' },
{ nombre: 'Tierra', id: 'boton-tierra'},
);
langostelvis.ataques.push(
{ nombre: 'Fuego', id: 'boton-fuego' },
{ nombre: 'Fuego', id: 'boton-fuego' },
{ nombre: 'Fuego', id: 'boton-fuego' },
{ nombre: 'Agua', id: 'boton-agua' },
{ nombre: 'Tierra', id: 'boton-tierra'},
);
mokepones.push(hipodoge, capipepo, ratigueya, pydos, tucapalma, langostelvis);

function asignarTipoMokepon() {
    mokepones.forEach((mokepon) => {
      let tierra = 0;
      let agua = 0;
      let fuego = 0;
  
    mokepon.ataques.forEach((ataque) => {
    if (ataque.nombre === 'Tierra') {
        tierra++;
    } else if (ataque.nombre === 'Agua') {
        agua++;
    } else if (ataque.nombre === 'Fuego') {
        fuego++;
    }
    });
  
    if (tierra > agua && tierra > fuego) {
    mokepon.tipo = 'tierra';
    } else if (agua > fuego) {
    mokepon.tipo = 'agua';
    } else {
    mokepon.tipo = 'fuego';
    }
    });
};


function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none';
    sectionReiniciar.style.display = 'none';
    asignarTipoMokepon();

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = ` 
        <div class="petCard div-${mokepon.nombre}">
            <input type="radio" name="mascota" id=${mokepon.nombre} class="petCard__input">
            <label for=${mokepon.nombre} class="petCard__label">
                <img id="mascota-img" class="petCard__img" src=${mokepon.foto} alt=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
            </label>
        </div>
        `
        contenedorMascotas.innerHTML += opcionDeMokepones;

        inputHipodoge = document.getElementById('hipodoge');
        inputCapipepo = document.getElementById('capipepo');
        inputRatigueya = document.getElementById('ratigueya');
        inputPydos = document.getElementById('pydos');
        inputTucapalma = document.getElementById('tucapalma');
        inputLangostelvis = document.getElementById('langostelvis');
        petCard = document.getElementsByClassName(`div-${mokepon.nombre}`);
        
    });

    botonMascotaJugador.addEventListener('click', seleccionarMasctoaJugador);
    botonReiniciar.addEventListener('click', reiniciarJuego);
};

function seleccionarMasctoaJugador() {
    sectionSeleccionarMascota.style.display = 'none';
    sectionSeleccionarAtaque.style.display = 'flex';
    
    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id;
        mascotaJugador = inputHipodoge.id;
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id;
        mascotaJugador = inputCapipepo.id;
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id;
        mascotaJugador = inputRatigueya.id;
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = inputPydos.id;
        mascotaJugador = inputPydos.id;
    } else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML = inputTucapalma.id;
        mascotaJugador = inputTucapalma.id;
    } else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = inputLangostelvis.id;
        mascotaJugador = inputLangostelvis.id;
    } else {
        alert('Por favor, seleccione una mascota.');
        reiniciarJuego();
    }

    
    extraerAtaques(mascotaJugador);    
    seleccionarMasctoaEnemigo();
};

function extraerAtaques(mascotaJugador) {
    let ataques ;

    mokepones.forEach((mokepon) => {
        if (mascotaJugador === mokepon.nombre) {
            ataques = mokepon.ataques
        }
    });

    mostrarAtaques(ataques);
};

function mostrarAtaques(ataques) { 
    ataques.forEach((ataque, i) => {
        ataquesMokepon = `
        <button class="boton-ataque boton-ataque-${i++}" id=${ataque.id}>${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon;
    });

    botonFuego = document.getElementById('boton-fuego');
    botonAgua = document.getElementById('boton-agua');
    botonTierra = document.getElementById('boton-tierra');
    botones = document.querySelectorAll('.boton-ataque');
};

function seleccionarMasctoaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length - 1);

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre;
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques;

    secuenciaAtaque()
};

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === 'fuego'){
                ataqueJugador.push('fuego');
                boton.style.background = '#112f58';
                boton.disabled = true;
            } else if (e.target.textContent === 'agua'){
                ataqueJugador.push('agua');
                boton.style.background = '#112f58';
                boton.disabled = true;
            } else {
                ataqueJugador.push('tierra');
                boton.style.background = '#112f58';
                boton.disabled = true;
            }
            ataqueAleatorioEnemigo();
        })
    });
};

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1);

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push('fuego');
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push('agua');
    } else {
        ataqueEnemigo.push('tierra');
    }
    iniciarPelea();
};

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
};

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador];
    indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}

function combate() {

    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje('EMPATE');
        } else if (ataqueJugador[index] === 'fuego' && ataqueEnemigo[index] === 'tierra') {
            indexAmbosOponentes(index, index);
            crearMensaje('GANASTE');
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
        } else if (ataqueJugador[index] === 'agua' && ataqueEnemigo[index] === 'fuego') {
            indexAmbosOponentes(index, index);
            crearMensaje('GANASTE');
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
        } else if (ataqueJugador[index] === 'tierra' && ataqueEnemigo[index] === 'agua') {
            indexAmbosOponentes(index, index);
            crearMensaje('GANASTE');
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
        } else {
            indexAmbosOponentes(index, index);
            crearMensaje('PERDISTE');
            victoriasEnemigo++;
            spanVidasEnemigo.innerHTML = victoriasJugador; 
        }
    }
    revisarVictorias();
};

function revisarVictorias() {
    if (victoriasJugador == victoriasEnemigo){
        crearMensajeFinal('EMPATE');
    } else if (victoriasJugador > victoriasEnemigo){
        crearMensajeFinal('GANASTE');
    } else if (victoriasJugador < victoriasEnemigo){
        crearMensajeFinal('PERDISTE');
    }
};

function crearMensaje(resultado) {

    let resultadoJugador = document.createElement('p');
    resultadoJugador.innerHTML =  indexAtaqueJugador;
    resultadoJugador.classList.add('resultado-jugador');
    let resultadoEnemigo = document.createElement('p');
    resultadoEnemigo.innerHTML =  indexAtaqueEnemigo;
    resultadoEnemigo.classList.add('resultado-enemigo');
    spanAtaqueJugador.appendChild(resultadoJugador);
    spanAtaqueEnemigo.appendChild(resultadoEnemigo);

};

function crearMensajeFinal(resultadoFinal) {
    let parrafo = document.createElement('p');
    parrafo.innerHTML = resultadoFinal;
    parrafo.classList.add('mensaje-final');
    sectionMensajes.appendChild(parrafo);
    sectionReiniciar.style.display = 'flex';
};
function reiniciarJuego() {
    location.reload();
};

function aleatorio(min, max) {
    return Math.floor(Math.random()* (max - min + 1) + min);
};

window.addEventListener('load', iniciarJuego);