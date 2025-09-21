import getRandomInt from '../utils.js'

const operators = ['+', '-', '*']

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

export default () => {
  const a = getRandomInt(1, 30)
  const b = getRandomInt(1, 30)
  const operator = operators[getRandomInt(0, operators.length - 1)]

  const question = `${a} ${operator} ${b}`
  const answer = String(calculate(a, b, operator))

  return [question, answer]
}
