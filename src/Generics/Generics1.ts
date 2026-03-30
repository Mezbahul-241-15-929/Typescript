// const addID=(obj: object)=>{
const addID=<T>(obj: T)=>{
    let id= Math.floor(Math.random()*1000);
    return {...obj, id};
}

let user=addID({
    name: "John", 
    age: 30
});

//user.id //only id found for 1st line
user.id;
user.age;
user.name;