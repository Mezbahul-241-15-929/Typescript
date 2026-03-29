//  ----------Type Basic----------------
let name="Meraz"; //assign in string
let age=34; //assign in number

console.log(name);

//name=34; //wrong
//age="Hello"; //wrong


let age2;
console.log(age2); //undefined
age2="32"; //assign in string
age2=32; // not wrong
console.log(age2);

// -------------function----------------
function add(a:number,b:number){
    return a+b;
}

//console.log(add("2",3)); //wrong
console.log(add(2,3));


//----------------Array----------------
let fruits = ["apple", "banana", "orange"];
fruits.push("grape"); //correct
//fruits.push(3); //wrong

let fruits2=[];

fruits2.push("apple");
fruits2.push(34);

let mixed= ["apple",3,true,{}]
mixed.push("banana")
mixed.push(44)
mixed.push({
    name:"Shakib"
})
console.log(mixed);

//-----------Object-----------------
let person = {
    name: "John",
    age: 30,
    isStudent: false
}

person.name = "Jane"; //correct
//person.country = "Bangladesh"; //wrong


