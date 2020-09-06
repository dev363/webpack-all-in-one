import './assets/scss/style.scss';
import './assets/css/style.css';
import { getOutput } from './assets/js/function';

const outputParagraph = document.querySelector('#output');

const generateOutput = () => {
    outputParagraph.textContent = getOutput();
};


const clickMe = document.querySelector('#clickMe');

clickMe.addEventListener('click', generateOutput);