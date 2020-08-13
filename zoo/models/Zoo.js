class Zoo {

    /**
     * @constructor
     * @param {Animal[]}animals
     */
    constructor(animals) {
        this.animals = animals
    }

    /**
     *
     * @param {Animal} animal
     */
    addAnimal(animal) {
        this.animals.push(animal)
    }

    makeAllAnimalsSaySomething() {
        this.animals.forEach(animal => animal.speak("say something"))
    }
}

module.exports = Zoo;