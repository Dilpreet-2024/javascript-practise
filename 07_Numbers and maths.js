//In this part we will learn about numbers and mathematical operations on numbers
let n=4.545;
console.log(n,typeof n);
console.log(n.toString().length);
console.log(n.toFixed(2));
let num=2343434;
console.log(num.toLocaleString('en-IN'));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Math.abs(-4));
console.log(Math.round(4.89))
console.log(Math.round(4.098));

//Most important Mathematical function -random number generation
//console.log(Math.random());//it will generate random number between 0 and 1
console.log(Math.round(Math.random()*10)+1);


//we can also define range of random numbers
//(Math.random()*(max-min+1))+min)

console.log(Math.round(Math.random()*10)+10);//will generate random numbers between 11 and 20
let min=10
let max=20
console.log(Math.round(Math.random()*(max-min))+min);

