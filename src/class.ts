class Car {
  public name: string
  public weight: number

  constructor(name: string, weight: number) {
    this.name = name
    this.weight = weight
  }

  public drive(): void {
    console.log('driving...')
  }

  public brake(): void {
    console.log('perform brake')
  }
}

// inheritance
class SportCar extends Car {
  public turbo(): void {
    console.log('perform nitros')
  }
}

class Truck extends Car {
  public size: number
  private _oil: number
  static getCarType: string = 'truck'
  static getInfo(): void {
    console.log('Truck is a durable type of car')
  }

  constructor(name: string, weight: number, size: number) {
    super(name, weight)
    this.size = size
    this._oil = size * 4
  }

  public loadStuff(): void {
    console.log('load some goods')
  }

  set oil(value: number) {
    this._oil = this.size * value
  }

  get oil(): number {
    return this._oil 
  }
}

const myTruck = new Truck('test', 20, 20)
myTruck.oil = 99
console.log(myTruck.oil)

// using static
console.log(Truck.getCarType)
Truck.getInfo()