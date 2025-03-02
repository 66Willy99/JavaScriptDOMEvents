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