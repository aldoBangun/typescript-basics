// return values & argument types

function add(a: number, b: number): number {
  return a + b
}

const total1: number = add(2, 2)
console.log(total1)

function printName(name: string): void {
  const message = `Your names is ${name}`
  console.log(message)
}

printName('Aldo')

// function as a type
type Multiply = (a: number, b: number) => number
type Relationship = (name1: string, name2: string) => void

const multiply: Multiply = (a, b) => {
  return a * b
}

multiply(20, 10)

const loveCalculator: Relationship = (a, b) => {
  const score: number = Math.round(Math.random() * 100)
  console.log(`${a} + ${b} = ${score} / 100`)
}

loveCalculator('Aldo', 'Jenny Blackpink')

// default parameters
const getFullName = (firstName: string, lastName: string = ''): string => {
  return firstName + ' ' + lastName
}

console.log(getFullName('Aldo'))

// optional parameters
const printNames = (name: string, count?: number): void => {
  if(count) {
    for(let i=0; i < count; i++) {
      console.log(name)
    }
    return
  }

  console.log(name)
}

printNames('Aldo Bangun', 2)