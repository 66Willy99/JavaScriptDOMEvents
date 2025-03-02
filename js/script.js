// QuerySelector

const heading = document.querySelector('.header__texto h2') // 0 o 1 elemento
// heading.textContent = 'Nuevo Heading';
console.log(heading);

// QuerySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].classList.add('nueva-clase');

// getElementById
// esta sintaxis ya no se ocupa tanto como querySelector o querySelectorAll
const heading2 = document.getElementById('heading'); 
console.log(heading2);


// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A'); // JavaScript recomienda crearlo con mayusculas y sin apertura y cierra
// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

//Agregar la clace
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

// Eventos

// console.log(1);
// window.addEventListener('load', function() { // este espera a que se descargue todo
//     console.log(2);
// });

// window.onload = function() {
//     console.log(3);
// }
// document.addEventListener('DOMContentLoaded', function() { // este espera a que se descargue solamente el HTML
//     console.log(4);
// });


// console.log(5);

// window.onscroll = function(evento) {
//     console.log(evento);
// }

// Seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault(); // previene la acción por defecto
//     // Validar un formulario

//     console.log('Enviando formulario');
// });

// Eventos de los Inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El evento de submit

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    //Validar el formulario
    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === '') {
        monstrarError("Todos los campos son obligatorios");
        return;
    }else {
        monstrarEnvio("Mensaje enviado correctamente");
    }

    //Enviar el formulario
    console.log('Se envio el formulario');
});

function leerTexto(e){
    console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    // console.log(datos);
}

// Mostrar Error
function monstrarError(mensaje) {
    const error= document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');
    formulario.appendChild(error);

    //Eliminar el mensaje de error después de 5 segundos
    setTimeout(() => {
        error.remove();
    }, 5000);
}

// Mostrar envio correcto
function monstrarEnvio(mensaje) {
    const success= document.createElement('P');
    success.textContent = mensaje;
    success.classList.add('correcto');
    formulario.appendChild(success);

    //Eliminar el mensaje de error después de 5 segundos
    setTimeout(() => {
        success.remove();
    }, 5000);
}

