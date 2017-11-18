console.log("I'm also here!");

const allDivs = document.getElementsByTagName('div');
const allThisClass = document.getElementsByClassName('mainHeader');
const theId = document.getElementById('dom');

console.log(allDivs);
console.log(allThisClass)
console.log(theId);

const hero = document.querySelector('.hero')
const theColor = prompt('Введите цвет')
hero.style.backgroundColor = theColor


const paragraph = document.getElementById('paragraph')
paragraph.style.letterSpacing = '10px'


