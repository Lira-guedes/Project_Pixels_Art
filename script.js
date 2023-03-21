/* eslint-disable padded-blocks */
/* eslint-disable semi */
/* eslint-disable no-extra-semi */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable editorconfig/editorconfig */
const colorPalett = document.querySelectorAll('.color');
const randomColorsButton = document.querySelector('#button-random-color');
const pixelBoard = document.querySelector('#pixel-board');

const firstColorPalet = () => {
  for (let i = 0; i < colorPalett.length; i += 1) {
    const firstColor = colorPalett[0];
    firstColor.style.backgroundColor = 'black';
    firstColor.classList.add('selected');
  }
};
firstColorPalet();

const createRandomColors = () => {
  const numberColor1 = Math.ceil(Math.random() * (255));
  const numberColor2 = Math.ceil(Math.random() * (255));
  const numberColor3 = Math.ceil(Math.random() * (255));
  const randomColor = `rgb(${numberColor1} , ${numberColor2} , ${numberColor3} )`;
  return randomColor;
};


const addRandomColors = () => {
    randomColorsButton.addEventListener('click', () => {
        const arrayDeColors = [];
        for (let i = 1; i < colorPalett.length; i += 1) {
            arrayDeColors.push(colorPalett[i].style.backgroundColor = createRandomColors());
        }
        localStorage.setItem('colorPalette', JSON.stringify(arrayDeColors)); 
    });
};
addRandomColors();

const getItemRandomColors = () => {
    const randomColor = localStorage.getItem('colorPalette');
    if (randomColor) {
        const jsonColors = JSON.parse(randomColor);
        for (let i = 1; i < colorPalett.length; i += 1) {
            colorPalett[i].style.backgroundColor = jsonColors[i - 1];
        }
    } else {
            colorPalett[1].style.backgroundColor = 'green';
            colorPalett[2].style.backgroundColor = 'red';
            colorPalett[3].style.backgroundColor = 'blue';
    }
};
getItemRandomColors();



const createBoardPixels = () => {
    for (let e = 0; e < 5; e += 1) {
        const divPixel = document.createElement('div');
        for (let i = 0; i < 5; i += 1) {
            const createPixel = document.createElement('div');
            createPixel.className = 'pixel';
            createPixel.style.backgroundColor = 'white';
            divPixel.appendChild(createPixel);
        };
        pixelBoard.appendChild(divPixel);
  };
};
createBoardPixels();

const selectPixels = () => {
    for (let i = 0; i < colorPalett.length; i += 1) {
        colorPalett[i].addEventListener('click', (event) => {
            document.querySelector('.selected').classList.remove('selected');
            event.target.classList.add('selected');
        });
    }
};
selectPixels();

const pixels = document.querySelectorAll('.pixel');
const colorsPixels = () => {
    for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].addEventListener('click', (event) => {
            const pixelSelected = event.target;
            pixelSelected.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
            const arrayDePixels = [];
            for (let e = 0; e < pixels.length; e += 1) {
                arrayDePixels.push(pixels[e].style.backgroundColor);
            }
            localStorage.setItem('pixelBoard', JSON.stringify(arrayDePixels));
        });
    };
};
colorsPixels();

const getColorsPixels = () => {
    const linhas = document.querySelectorAll('.pixel');
    const pixelB = localStorage.getItem('pixelBoard');

    if (pixelB) {
        const savedColoredPixels = JSON.parse(pixelB);
        for (let i = 0; i < linhas.length; i += 1) {
            linhas[i].style.backgroundColor = savedColoredPixels[i - 1];
        };
    }
}
getColorsPixels();

const limpar = () => {
    const btnLimpar = document.querySelector('#clear-board');
    btnLimpar.addEventListener('click', () => {
        for (let i = 0; i < pixels.length; i += 1) {
            pixels[i].style.backgroundColor = 'rgb(255, 255, 255)';
        }
    });
}
limpar();


window.onload = () => {
    
}
