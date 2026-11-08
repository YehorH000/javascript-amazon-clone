class Car {
    #brand
    #model
    speed = 0
    isTrunkOpen = false

    constructor(brand, model) {
        this.#brand = brand
        this.#model = model
    }

    displayInfo() {
        return `${this.#brand} ${this.#model}, Speed: ${this.speed} km/h. The Trunk is ${this.isTrunkOpen ? 'open' : 'closed'}.`
    }

    go() {
        if (this.speed <= 195 && this.isTrunkOpen === false) {
            this.speed += 5
        }
    }

    brake() {
        if (this.speed >= 5) {
            this.speed -= 5
        }
    }

    openTrunk() {
        if (this.speed === 0) {
            this.isTrunkOpen = true
        }
    }

    closeTrunk() {
        this.isTrunkOpen = false
    }
}

class RaceCar extends Car {
    acceleration

    constructor(brand, model, acceleration) {
        super(brand, model)
        this.acceleration = acceleration
    }

    go() {
        if (this.speed <= 295 && this.isTrunkOpen === false) {
            this.speed += this.acceleration
        }
    }
}

const car1 = new Car('Toyota', 'Corolla')
const car2 = new Car('Tesla', 'Model 3')

console.log(car1.displayInfo())
car2.go()
car2.go()
console.log(car2)
console.log(car2.displayInfo())

const raceCar = new RaceCar('Mclaren', 'F1', 20)
raceCar.go()
console.log(raceCar)
