const container = document.querySelector('#container');

for(let i = 0; i < 16 * 16; i++){
    let squareDiv = document.createElement('div');
    squareDiv.setAttribute('class', 'square-div');
    container.appendChild(squareDiv);
    console.log('created');

}

container.addEventListener('mouseover', (e) => e.target.style.backgroundColor = 'black');
