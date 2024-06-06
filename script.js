const container = document.querySelector('#container');
const colors = document.querySelectorAll('.color');
const colorWheel = document.querySelector('#color-wheel');
const colorPicker = document.querySelector('#color-picker');

colorPicker.addEventListener('click', () => {
    colorWheel.click();
});

colorWheel.addEventListener('change', () => {
    colorPicker.style.backgroundColor = colorWheel.value;
})

for (const color of colors) {
    color.style.backgroundColor = color.id;

    color.addEventListener('click', () => {
        colorPicker.style.backgroundColor = color.id;
        colorWheel.value = color.id
    })
}

for(let i = 0; i < 16 * 16; i++){
    let squareDiv = document.createElement('div');
    squareDiv.setAttribute('class', 'square-div');
    container.appendChild(squareDiv);
    console.log('created');

}

container.addEventListener('mouseover', (e) => e.target.style.backgroundColor = colorWheel.value);
