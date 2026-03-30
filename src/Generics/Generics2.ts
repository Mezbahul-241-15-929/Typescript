// const addID=<T extends object>(obj: T)=>{
const addID=<T extends {
    name: string,
    age: number
}>(obj: T)=>{
    let id= Math.floor(Math.random()*1000);
    return {...obj, id};
}



//let user="Meraz";
//addID(user); //error because user is not an object

let user=addID({
    name: "John", 
    age: 30,
    country: "USA"
});

addID(user)