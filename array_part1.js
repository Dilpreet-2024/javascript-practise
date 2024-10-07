//array in javascript is quite different from array in java
//Be it syntax or be it elements
//element can include any data type which is different from java arrays which can include elements of same type only

let a=[1,34,53,9.098,4];
console.log(a,typeof a);

let b=[1,true,undefined,"onjl",null,[45,34,"jki"]]
console.log(b,typeof b);
console.log(b[5][2]);

//array methods
a.push(1);//add element at end of array
a.push(2);
console.log(a);
a.pop();//remove element from end of array
a.unshift(0);//add element at starting of array
console.log(a);
a.shift();//remove element from starting of array
console.log(a);
console.log(a.includes(-9));//will give result in boolean whether the array contains this element or not
console.log(a.indexOf(9.098));//will give the index of the element if it is present
console.log(typeof a.join())//join function will convert array to string
//slice and splice
//slice will not include original array while slplice do affect original array
//slice does not include last one of range but splice does
let n1=a.slice(1,3);
console.log(n1);
console.log(a)
let n2=a.splice(1,3);
console.log(n2);
console.log(a);