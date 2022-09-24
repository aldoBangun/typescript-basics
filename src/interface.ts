interface ILaptop {
  name: string
  on(): void
  off(): void
}

class Laptop implements ILaptop {
  name: string

  constructor(name: string) {
    this.name = name
  }

  on(): void {
    console.log('turning on...')
  }

  off(): void {
    console.log('turning off...')
  }
}

class Gaming extends Laptop {
  static getType(): void {
    console.log('gaming')
  }
}

const lenovo = new Laptop('Lenovo')
const asusRog = new Gaming('ASUS ROG')
lenovo.on()
asusRog.off()
Gaming.getType()