import { randdomUUID } from 'node:crypto'
export default class Hero {
    constructor({ name, age, power }) {
        this.id = randdomUUID
        this.name = name
        this.age = age
        this.power = power
    }
}
