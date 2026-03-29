//----------Function Signatures--------------
let add;
add = (a, b) => {
    return a + b;
};
let calculation;
calculation = (a, b, c) => {
    if (c === "add") {
        return a + b; //add return
    }
    else {
        return a - b; //add return
    }
};
console.log(calculation(5, 6, "minus")); //-1
// Example 2 with number,string,object
let userDetails;
userDetails = (id, user) => {
};
console.log(calculation(5, 6, "minus"));
const user = {
    name: "Mezbah",
    greet: (msg) => `Hi ${msg}`,
};
const createBook = (title, author) => {
    // logic
    return true;
};
export {};
//# sourceMappingURL=Function_Signatures.js.map