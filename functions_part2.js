//rest operator in functions
function enter(...num){
return num//will return an array of num
}
console.log(enter(1,2,3,4,5,6,7,8,9,10))

function duplicate(val1,val2,...val3)
{
    return val3
}
console.log(duplicate(1,2,3,4,5,6,7,8,9,10))

//passing object to functions
function probj(obj){
    console.log(`Hello myname is ${obj.name} and my age is ${obj.age} years old`)
}
let o={
    name:"khushi",age:67
}
probj(o)

//passing array to functions

function pass(a)
{
console.log(a[3])
}
let arr=["ijk",5,false,null]
pass(arr)
