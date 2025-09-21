import runEngine from '../index.js'
import getRandomInt from '../utils.js'

const description = 'Find the greatest common divisor of given numbers.'

const getGcd = (a, b) => {
  if (b === 0) {
    return a
  }
  return getGcd(b, a % b)
}

const generateRound = () => {
  const num1 = getRandomInt(1, 100)
  const num2 = getRandomInt(1, 100)
  const question = `${num1} ${num2}`
  const answer = String(getGcd(num1, num2))
  return [question, answer]
}

export default () => runEngine(description, generateRound)
