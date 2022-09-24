// Generic type
// use generic instead of using any type

function getData<T>(value: T) {
  return value
}

const dataString = getData('string example')
const dataNumber = getData(132)

// note that we can still use string or number methods properly here because it's not any type
console.log(dataString.length)
console.log(dataNumber.toFixed(2))