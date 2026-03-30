'  '
let a= [3, 'hello',{p:3}];

//a[0]=false;  //not accepted
a[0]="hi"  //accepted

let b: [number, string, object] = [4, 'world', {q: 4}];

//a[0]=false;  //not accepted because boolean is not assignable to number
//b[0]="Hello"; //0 index only number
b[0]=44