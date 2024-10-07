//a basic introduction of objects
let obj={
    "name":"temp",
    age:15,
    location:"Udaipur",
    email:"dbp@user.com",
    "phone":1234567890
}
//two ways of accessing objects in js
//type-1
console.log(obj.name,obj.age,obj.location,obj.email);
//type-2
console.log(obj["age"],obj["location"],obj["email"])

obj.email="ghj@gmail.com"
console.log(obj)
// Object.freeze(obj);
//ABOVE STATEMENT IS USED TO FREEZE ANY CHANGE IN OBJECT
obj.email="abc@gmail.com"
console.log(obj);
obj.fun=function(){
    console.log("I am a value of function");
}
obj.fun();//callling function as a part of object
console.table([typeof obj.name,typeof obj.email,typeof obj.phone,typeof obj.location,typeof obj.age])