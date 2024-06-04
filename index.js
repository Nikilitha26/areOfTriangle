const baseInput = document.getElementById('base');
const heightInput = document.getElementById('height');
const resultInput = document.getElementById('result');
const button = document.getElementById('button');
button.addEventListener('click', calculateArea);

function calculateArea() {
    const base = baseInput.value;
    const height = heightInput.value
    const area = base * height / 2;
    resultInput.value = area;
}
