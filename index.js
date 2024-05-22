const mines = document.querySelector('.mines')
const plus = document.querySelector('.plus')
const number = document.querySelector('.number')
const reset = document.querySelector('.reset')
const random = document.querySelector('.random')

mines.onclick = () => {
    if (number.innerHTML != -10) {
        number.innerHTML -= 1
    } else {
        console.log('Number = -10');
    }
}

plus.onclick = () => {
    if (number.innerHTML != 10) {
        number.innerHTML += 1
    } else {
        console.log('Number = 10');
    }
}
reset.onclick = () => {
    number.innerHTML = 0
}
random.onclick = () => {
    number.innerHTML = Math.floor(Math.random() * 10)
}
