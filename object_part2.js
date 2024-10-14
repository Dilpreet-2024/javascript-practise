//creating singleton object
const obj=new Object();
console.log(obj);
obj.email="abc@gmail.com"
obj.phone=12345;
console.log(obj);
//nesting of objects
let obj2={username:{
    fullname:{
        first:"John",
        mid:"Linclon",
        last:"Abraham"
    }
},age:29};
console.log(obj2.username?.fullname?.last);
//concatenation of objects
//method-1
let obj1={a:1,b:2}
let obj3={c:3,d:4}
let obj4=Object.assign({},obj1,obj3)
console.log(obj4);
//method-2
let o={...obj1,...obj3};
console.log(o);
//to print all keys of object
console.log(Object.keys(obj1))
console.log(Object.values(obj3))

//deleting a particular value in object
let del={x:34,y:"gkjgkj",z:true,a:null};
delete(del.x);
console.log(del);