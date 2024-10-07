//int this part we will learn about date object in javascript
//date object in javascript is used to get the current date and time
let d=new Date();
console.log(d,typeof d);
//in the above code we have created a new date object and logged it in the console
console.log(d.toLocaleDateString())
console.log(d.toLocaleTimeString())
console.log(d.toDateString())
console.log(d.getDate())
console.log(d.getMonth())
console.log(d.getFullYear())
console.log(d.getTime())
//we can also create our custom date
let cdate=new Date(2022 ,0,1);
console.log(cdate.toDateString())

console.log(d.toLocaleString('default',{
    weekday:'long',
    month:'long',
}))
