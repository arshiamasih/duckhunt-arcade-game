const DUCK = document.querySelector('#duck')
const SCORE = document.querySelector('#score')

const randomNum = (num) => Math.floor(Math.random() * num) + 1

const moveDuck = () => {
  const w = window.innerWidth - 100;
  const h = window.innerHeight - 100;

  DUCK.style.top = randomNum(h) + 'px'
  DUCK.style.left = randomNum(w) + 'px'
}

const increaseScore = () => {
  const newScore = Number(SCORE.textContent) + 1
  SCORE.innerHTML = newScore;
}


DUCK.addEventListener('click', () => {
increaseScore()
moveDuck()
})

setInterval(moveDuck, 2000)
