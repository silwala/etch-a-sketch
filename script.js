const containerWidth = 600;
const container = document.querySelector('#container');
const colors = document.querySelectorAll('.color');
const colorWheel = document.querySelector('#color-wheel');
const colorPicker = document.querySelector('#color-picker');
const draw = document.querySelector('#draw');
const erase = document.querySelector('#erase');
const clear = document.querySelector('#clear');
const gridSize = document.querySelector('#grid-size');
const gridSizeValue = document.querySelector('#grid-size-value');

function init(){
    let brushColor = colorWheel.value;

    changeGridSizeText();

    colorPicker.addEventListener('click', () => {
        colorWheel.click();
    });

    colorWheel.addEventListener('change', () => {
        colorPicker.style.backgroundColor = colorWheel.value;
        brushColor = colorWheel.value;
    })

    for (const color of colors) {
        color.style.backgroundColor = color.id;
    
        color.addEventListener('click', () => {
            colorPicker.style.backgroundColor = color.id;
            colorWheel.value = color.id
            brushColor = color.id;
        })
    }

    changeGridSize(gridSize.value);

    draw.addEventListener('click', () => brushColor = colorWheel.value);
    erase.addEventListener('click', () => brushColor = '#ffffff');
    clear.addEventListener('click', () => {
        for (const child of container.childNodes) {
            child.style.backgroundColor = '#ffffff'
        }
    });
    
    container.addEventListener('mouseover', (e) => e.target.style.backgroundColor = brushColor);
    gridSize.addEventListener('change',() => {
        changeGridSizeText();
        changeGridSize(gridSize.value)
    })
    gridSize.addEventListener('mousemove', changeGridSizeText)
}

function changeGridSize(size){
    console.log('called');
    container.textContent = ''
    for(let i = 0; i < size * size; i++){
        let squareDiv = document.createElement('div');
        squareDiv.setAttribute('class', 'square-div');
        squareDiv.style.flexBasis = `calc(${containerWidth}px / ${size})`
        squareDiv.style.height = `calc(${containerWidth}px / ${size})`
        container.appendChild(squareDiv);
        console.log('created');  
    }
}

function changeGridSizeText(){
    gridSizeValue.textContent = `${gridSize.value}x${gridSize.value}`;
}

init();










