// QuerySelector

const heading = document.querySelector('.header__texto h2') // 0 o 1 elemento
// heading.textContent = 'Nuevo Heading';
console.log(heading);

// QuerySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('navegacion__enlace');

// getElementById
// esta sintaxis ya no se ocupa tanto como querySelector o querySelectorAll
const heading2 = document.getElementById('heading'); 
console.log(heading2);