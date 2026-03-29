let myFunct: Function;

myFunct=()=>{
    console.log("hello")
}

const myFunct2=(a:string,b:string ,c:string="C")=>{
// const myFunct2=(a:string,b:string ,c?:string)=>{
    console.log(`Hello ${a} ${b}`);
    if(c){
        console.log(`Hello ${c}`);
    }
}
myFunct2("A","B");
myFunct2("A","B","C");

const myFunct3=(a:number,b:number):number=>{
    return a+b;
}
console.log(myFunct3(1,3));
