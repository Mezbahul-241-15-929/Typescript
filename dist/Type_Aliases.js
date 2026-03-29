// ---------------Object Type Alias------------
let name = "Mezbah";
console.log(name);
const user1 = {
    name: "Rahim",
    age: 20,
};
console.log(user1);
const userDetails = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};
let sum = (x, y) => {
    return x + y;
};
let currentStatus = "success";
let st1 = 1;
console.log(st1);
const item = {
    id: 101,
    name: "Book",
};
const myBook = {
    title: "Atomic Habits",
    author: "James Clear",
    pages: 320,
    status: "read",
};
export {};
//# sourceMappingURL=Type_Aliases.js.map