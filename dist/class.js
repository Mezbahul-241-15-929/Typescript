class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing. He is ${this.age} years old.`);
    }
}
const player1 = new Player("John", 25, "USA");
const player2 = new Player("Jane", 22, "UK");
console.log(player1.name);
console.log(player2.age);
player1.play(); // Output: John from USA is playing. He is 25 years old.
player2.play(); // Output: Jane from UK is playing. She is 22 years old.
const players = [];
players.push(player1);
players.push(player2);
export {};
//# sourceMappingURL=class.js.map