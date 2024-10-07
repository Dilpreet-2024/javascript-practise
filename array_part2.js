//merging two arrays
//method-one(using concat operator)
let a=[1,2,3,4,5];
let b=[5,6,7,8];
let c=a.concat(b);
console.log(c);
//method-two(using splash operator)
let d=[...a,...b,...c];
console.log(d);
//conversion of various data types to array
//converting string to array
let arr=Array.from("Aparna");
console.log(arr);
//converting numbers to array
let ar=Array.of(1,2,3,4,5);
console.log(ar);

//flattening of array
let n=[1,2,3,[4,5,6,[7,8,9,[false,"string"]]]];
let n1=n.flat(Infinity);
console.log(n1.length);