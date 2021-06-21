const form = document.querySelector('.quiz-form')
const buttonQuizSubmit = document.querySelector('button')

const correctAswers = ['B', 'B', 'B', 'B' , 'B']

form.addEventListener('submit', event => {
  event.preventDefault()
  
  let finalScore = 0 

  const userAnswers = [ 
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    form.inputQuestion5.value
  ]
  
 userAnswers.forEach((userAnswer, index) => {
   if (userAnswer === correctAswers[index])
    finalScore += 25
  })
 
  const paragraph = `<h5>Você acertou ${finalScore}% das questões </h5>`
  button.insertAdjacentHTML('beforebegin', paragraph)
  button.innerText = 'Jogar de novo'
  
  const removeParagraph = () => {
    const paragraph = document.querySelector('h5')
    if (paragraph) {
      paragraph.remove()
    }
  }

  buttonQuizSubmit.addEventListener('click',event => {
    removeParagraph()
    window.location.reload()
  })
})
