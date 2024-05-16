console.log(document.title);
// VARIABLES
const tituloH2 = document.getElementById('gen-1');
const gen1 = tituloH2.nextElementSibling; // accedo al div hermano del h2 de la gen1
const gen1Fondo = gen1.querySelectorAll('.infocard'); // aquí selecciono solo gen1 pokemon
const imagenes = document.querySelectorAll('img');
const voladores = document.querySelectorAll('.itype.flying');
const url = window.location.href;
const dominio = window.location.hostname;


// Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
tituloH2.textContent = 'Generasió 1 Pokimon';

// Cambia el color de fondo de la primera generación de Pokimon.
gen1Fondo.forEach(element=> { 
        element.setAttribute('style', 'background: cyan');
});

// Imprime por consola la URL de la página.
console.log(url);

// Imprime por consola el dominio de la página.
console.log(dominio);

// Imprime todos los nodos de imagen.
console.log(imagenes);

// Sustituye el atributo "src" de todas las imágenes
imagenes.forEach(element => {
    element.setAttribute('src', 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif')
})

// Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
const pokevoladores = [];
voladores.forEach(element => {
    const card = element.closest('.infocard').querySelector('.infocard-lg-data.text-muted');
    if (card) {
        pokevoladores.push(card);
    }
});
pokevoladores.forEach(element => {
    element.setAttribute('style', 'background: blue');
}) 