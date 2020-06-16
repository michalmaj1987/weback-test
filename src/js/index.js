import '../scss/main.scss';
import moment from 'moment';

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
const emptyParagraph = document.querySelector('.about__header__--js');
emptyParagraph.innerHTML = `Jeszcze nie uzupełniłem treści o CSS ale zrobiłem JS!`;


const hamburger = document.querySelector('.hamburger--js');
 
hamburger.addEventListener('click', () => {
 const nav = document.querySelector('.navigation--js');
 nav.classList.toggle('navigation--open');
})
const startOfDay = moment().startOf('day').fromNow();

const timePlaceholder = document.querySelector('.time--js');

timePlaceholder.innerHTML = startOfDay;

let isDark = false;
const switchModes = document.querySelector('.mode--js');
switchModes.addEventListener('click', () => {
if (isDark) {
  document.documentElement.style.setProperty('--background-color', '#f4f0f4');
  document.documentElement.style.setProperty('--text-color', '#333333');
  isDark = false;
} else{
  document.documentElement.style.setProperty('--background-color', '#333333');
  document.documentElement.style.setProperty('--text-color', '#f4f0f4');
  isDark = true;
}
})
 



/* place your code below */

