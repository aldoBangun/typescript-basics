// generic type
// use generic instead of using any type

function getData<T>(value: T) {
  return value
}

const dataString = getData('string example')
const dataNumber = getData(132)

// note that we can still use string or number methods properly here because it's not any type
console.log(dataString.length)
console.log(dataNumber.toFixed(2))


// generic class
class List<T> {
  private data: T[]

  constructor(...elements: T[]) {
    this.data = elements
  }

  addOne(element: T): void {
    this.data.push(element)
  }

  addMultiple(...elements: T[]): void {
    this.data.push(...elements)
  }

  getData(): T[] {
    return this.data
  }
}

const myNumbers = new List<number>(1, 2, 3, 4)
const myStrings = new List<string>('one', 'two', 'three')
const myRandom = new List<number | string>('one', 2, 'three', 4, 5)
myRandom.addMultiple('6', 7, 'eight')
myRandom.addOne(9)
console.log(myRandom.getData())