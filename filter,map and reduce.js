// in this part we will learn about more higher order functions in javascript
//i.e, filter, map and reduce  functions

//filter
// for each aand other loops cant return any value but with the help of filter it is possible to return new values
let obj=[
    {
        name:"Mahi",
        age:23
    },
    {
        name:"Kanchan",
        age:22
    },
    {
        name:"Dil",
        age:24
    }
];
const ans=obj.forEach((obj)=>{
    console.log(obj.name);
})
console.log(ans);
const ans2=obj.filter((i)=>{
console.log(i.name);
return i.name;
});
console.log(ans2);
//we can also put conditions in filter
const ans3=obj.filter((i)=>i.age>22);
console.log(ans3);



//map 
// map can put modification in each value of object
// it can also return value

let o=[1,2,3,4,5];
 let an3=o.map((each)=>each*10);
console.log(an3);
// chaining in map
let an4=o.map((each)=>each*10).map((each)=>each+1).filter((each)=>each>=40);
console.log(an4);

//will study reduce next time