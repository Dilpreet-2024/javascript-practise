//int this part we wil learn more about javascript loops


//for of loops
// it is used to iterate over arrays ,strings, and  other iterable objects
// objects are not iterable in for of loops
let arr=[1,"String",true];
for (const i of arr) {
    console.log(i);
}
let str="America"
for (const e of str) {
    console.log(e);
}

//for in loops in js
// it is used to iterate over objects,arrays but not on map,sets,etc....
let o={a:"xyz",b:5,c:true,d:null};
for (const key in o) {
    
     console.log(`${key}:${o[key]}`);  
}           

// for each loop
// it is a higher order array loop
// it is used to iterate over arrays and array of objects
let names=["Khushi","Muskaan","Meet","Yash","Eakas","Reet","Aish"];
names.forEach((index)=>{
    console.log(index);
})

let students=[
    {
        name:"Abhi",
        marks:23
    },
    {
        name:"Khushi",
        marks:30
    },
    {
        name:"Muskaan",
        marks:30
    }
];
students.forEach((index)=>{
    console.log(index.marks);
});
for (const i of students) {
    console.log(i.name);
}
for (const key in students) {
    
        console.log(students[key].name);
}
for(let i=0;i<students.length;i++)
{
    console.log(i);
}