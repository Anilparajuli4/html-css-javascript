let score1 = Math.ceil(Math.random() * 10)
let score2 = Math.ceil(Math.random() * 10)
const inputEl = document.getElementById('input')
const scoreEl = document.getElementById('score')
const formEl = document.getElementById('form')
const questionEl = document.getElementById('question')

const correctAns = score1 * score2

questionEl.innerText = `what is ${score1} multiply ${score2}`
let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
    score = 0
}

scoreEl.innerText = `score:${score}`

formEl.addEventListener('submit', (() => {
    const userAns = +inputEl.value
    if (userAns === correctAns) {
        score++
        updateLocalStorage()
    } else {
        score--
        updateLocalStorage()
    }
}))

function updateLocalStorage() {
    localStorage.setItem('score', JSON.stringify(score))
}