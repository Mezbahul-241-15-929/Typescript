// ---------------Object Type Alias------------

type UserName = string;


let name: UserName = "Mezbah";


console.log(name);


// --------------Object Type Alias---------------
type User={
    name: string,
    age: number
}

const user1: User = {
  name: "Rahim",
  age: 20,
};

console.log(user1);

type stringOrNum2 = string | number;
type userType = { name: string; age: number };

const userDetails = (id: stringOrNum2, user: userType) => {
  console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};

const sayHello = (user: userType) => {
  console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};


// -------------Function Type Alias-------------
type add=(a: number, b: number) => number;

let sum: add=(x,y)=>{
    return x+y;
}

// --------------Union Type Alias-------------------
type Status = "success" | "error" | "loading";

let currentStatus: Status = "success";
// ❌ "done" → not allowed

type stringOrNum = string | number;
let st1: stringOrNum = 1;
console.log(st1);


// -------------Reusing Type Alias---------------------
type ID = string | number;

type Product = {
  id: ID;
  name: string;
};

const item: Product = {
  id: 101,
  name: "Book",
};


// ---------------Real-Life Example----------------------
type Book = {
  title: string;
  author: string;
  pages: number;
  status: "read" | "unread";
};

const myBook: Book = {
  title: "Atomic Habits",
  author: "James Clear",
  pages: 320,
  status: "read",
};

