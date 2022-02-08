const board = document.querySelector('#board');
const squareNumber = 3000;
const defaultColor = '#34373b'

const getRandomColor = () => {
    return Math.random() * 255;
}

const setBackgroundColor = (element, color) => {
    element.style.backgroundColor = color;
}

const setBoxShadowColor = (element, color) => {
    element.style.boxShadow = `0 0 2px ${color}`;
}

const setColor = (element) => {
    const red = getRandomColor()
    const green = getRandomColor()
    const blue = getRandomColor()
    const color = `rgb(${red}, ${green}, ${blue})`
    setBackgroundColor(element, color)
    setBoxShadowColor(element, color)

}
const resetColor = (element) => {
    setBackgroundColor(element, defaultColor)
    setBoxShadowColor(element, 'black')
}

for (let i = 0; i < squareNumber; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    board.append(square);

    square.addEventListener('mouseover', () =>{
        setColor(square)
    })
    square.addEventListener('mouseleave', () => {
        resetColor(square)
    })
}