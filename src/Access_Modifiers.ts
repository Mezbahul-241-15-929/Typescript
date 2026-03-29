class Player {
    
    // public name: string;
    // private age: number;
    // readonly country: string;

    // constructor(n: string, a: number, c: string) {
    //     this.name = n;
    //     this.age = a;
    //     this.country = c;
    // }

    // Shortcut
    constructor(
        public name: string,
        private age: number,
        readonly country: string,
    ) { }

    play() {
        console.log(`${this.name} from ${this.country} is playing. He is ${this.age} years old.`);
    }

}

const player1 = new Player("John", 25, "USA");
const player2 = new Player("Jane", 22, "UK");



player1.name = "John Doe"; // Allowed for public
//player1.age = 26; // Error: age is private
//player1.country = "Canada"; // Error: country is readonly

console.log(player1.name);
//console.log(player1.age);  // Error: age is private
console.log(player1.country); //  country is readonly


player1.play(); // Output: John from USA is playing. He is 25 years old.
player2.play(); // Output: Jane from UK is playing. She is 22 years old.


const players: Player[] = [];

players.push(player1);
players.push(player2);


