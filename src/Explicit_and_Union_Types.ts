let a: string;
let b:number;
let c:boolean;
let d: any;

let e: string[]=[];
e.push("apple");

//---------Union Type-----------
let f: string | number;
f="Hello";
f=34;

console.log(f)
//array
let g:(string |number)[]=[];
g.push("Hello",34);

//object
let h:object;
h={
    name:"John",
    age:30
}

let i:{
    name:string;
    age:number;
    isStudent:boolean;
};

i={
    name:"Jane",
    age:25,
    isStudent:false
}

let j:object;
j=[1,3,4,5] //array is a kind of object