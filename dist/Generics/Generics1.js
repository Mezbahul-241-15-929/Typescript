// const addID=(obj: object)=>{
const addID = (obj) => {
    let id = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: "John",
    age: 30
});
//user.id //only id found for 1st line
user.id;
user.age;
user.name;
export {};
//# sourceMappingURL=Generics1.js.map