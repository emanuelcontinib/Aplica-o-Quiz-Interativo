
const form = document.querySelector('.quiz-form')
const button = document.querySelector('button')

const correctAswers = ['B', 'B', 'B', 'B' , 'B']

form.addEventListener('submit', event => {
  event.preventDefault()
  
  let score = 0 

  const userAnswers = [ 
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    form.inputQuestion5.value
  ]
  
  const paragraph = `<h5>Você acertou ${score}% das questões </h5>`
  button.insertAdjacentHTML('beforebegin', paragraph)
  button.innerText = 'Jogar de novo'
  
  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAswers[index])
    score += 25
  })
 
  const removeParagraph = () => {
    const paragraph = document.querySelector('h5')
    if (paragraph) {
      paragraph.remove()
    }
  }

  button.addEventListener('click',event => {
    removeParagraph()
    window.location.reload()
  })

})

