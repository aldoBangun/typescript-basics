abstract class Vehicle {
  abstract wheels: number

  start(): void {
    console.log('brummm..')
  }
}

class Bike extends Vehicle {
  wheels: number = 4
}

const myBike = new Bike()
console.log(myBike)
myBike.start()