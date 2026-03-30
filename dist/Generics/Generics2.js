// const addID=<T extends object>(obj: T)=>{
const addID = (obj) => {
    let id = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { id });
};
//let user="Meraz";
//addID(user); //error because user is not an object
let user = addID({
    name: "John",
    age: 30,
    country: "USA"
});
addID(user);
export {};
//# sourceMappingURL=Generics2.js.map