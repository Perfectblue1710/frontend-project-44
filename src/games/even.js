import readlineSync from 'readline-sync'

const isEven = num => num % 2 === 0

export default function runEven() {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let correctAnswers = 0

  while (correctAnswers < 3) {
    const number = Math.floor(Math.random() * 100) // случайное число 0–99
    console.log(`Question: ${number}`)
    const answer = readlineSync.question('Your answer: ').toLowerCase()

    const correct = isEven(number) ? 'yes' : 'no'

    if (answer !== correct) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
    correctAnswers += 1
  }

  console.log(`Congratulations, ${name}!`)
}
