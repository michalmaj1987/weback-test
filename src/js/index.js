import '../scss/main.scss';
console.log('siema!');
const name = 'Michał Maj';
const age = 33; 
console.log(name);
console.log(age);

const greet = (age,name) =>{
console.log(`Witaj Nazywam się ${name} i mam ${age} lata. `);
}

greet(32,'Michał');

const header = document.querySelector('.main__header--js');
header.innerHTML = `Witaj Nazywam się ${name} i mam ${age} lata.`;
const emptyParagraph = document.querySelector('.about__header__paragraph--js');
emptyParagraph.innerHTML = `Jeszcze nie uzupełniłem treści o CSS ale zrobiłem JS!`;


const hamburger = document.querySelector('.hamburger--js');
 
hamburger.addEventListener('click', () => {
 const nav = document.querySelector('.navigation--js');
 nav.classList.toggle('navigation--open');
})
/* place your code below */

