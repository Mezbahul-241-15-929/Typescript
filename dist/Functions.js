let myFunct;
myFunct = () => {
    console.log("hello");
};
const myFunct2 = (a, b, c = "C") => {
    // const myFunct2=(a:string,b:string ,c?:string)=>{
    console.log(`Hello ${a} ${b}`);
    if (c) {
        console.log(`Hello ${c}`);
    }
};
myFunct2("A", "B");
myFunct2("A", "B", "C");
const myFunct3 = (a, b) => {
    return a + b;
};
console.log(myFunct3(1, 3));
export {};
//# sourceMappingURL=Functions.js.map