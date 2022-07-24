var _ = require('lodash');
var array = [1,2,3,4,5,6];
console.log('Answer:', _.without(array,3));
const css = document.querySelector('h3');
const [color1, color2] = document.querySelectorAll('.color')
const body = document.querySelector('#gradient');

setGradient = () => {
	body.style.background = _linearGradient();
	css.textContent = `${body.style.background};`;
}

_linearGradient = () => {
	return `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);