// in this part we will study about arrow functions in javascript
// arrow functions are used to define small functions in a more concise way
let obj={
    username:"abc",
    mobile:4030,
    details:function(){
        console.log(`Hello my name is ${this.username}`)
    },
    arrowdetails:()=>{
console.log(`${this.username} , you are welcome`)
    }
}
obj.arrowdetails();//arrow function will not work allow this keyword
obj.details();
obj.username="xyz";
obj.details();

//normal function
const add=function(x,y)
{
    return x+y;
}
console.log(add(1,2));
//arrow functions with explicit return
const adds=(x,y)=>{
return x+y;
}
console.log(adds(1,4));

//arrow functions with implicit return
const adder=(x,y)=>(x+y)
console.log(adder(5,3));

//returning objects with implicit return
const print=()=>({a:"abc",b:"xyz",c:false})
console.log(print());