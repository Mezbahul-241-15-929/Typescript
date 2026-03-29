//----------Function Signatures--------------
let add:(x: number,y:number)=>number;

add=(a:number,b:number)=>{
    return a+b;
}

let calculation: (x: number, y: number, z: string) => number;

calculation = (a: number, b: number, c: string) => {
  if (c === "add") {
    return a + b; //add return
  } else {
    return a - b; //add return
  }
};

console.log(calculation(5, 6, "minus"));  //-1

// Example 2 with number,string,object
let userDetails: (id: number | string, userInfo: {
  name: string,
  age: number
}) => void;

userDetails = (id: number | string, user: {
  name: string,
  age: number
}) => {

};

console.log(calculation(5, 6, "minus"));
// Example 2: Function in Object (Real Use Case)
type User = {
  name: string;
  greet: (msg: string) => string;
};

const user: User = {
  name: "Mezbah",
  greet: (msg) => `Hi ${msg}`,
};


//Real Example
type CreateBook = (title: string, author: string) => boolean;

const createBook: CreateBook = (title, author) => {
  // logic
  return true;
};