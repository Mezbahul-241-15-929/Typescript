import type { IsPlayer } from "./IsPlayer.js";

export class Player implements IsPlayer {
    constructor(
        public name: string,
        private age: number,
        public country: string,
    ) { }

    getAge() {
        return this.age;
    }

    play() {
        console.log(`${this.name} from ${this.country} is playing. He is ${this.age} years old.`);
    }

}