
//normal string to number conversion
let number="123"
console.log(number,typeof number)
let n=Number(number)
console.log(n,typeof n)

//problems
let no="123abc"
console.log(no,typeof no)
let nu=Number(no);
console.log(nu,typeof nu)

//boolean to number conversion
let a=true;
let b=false;
console.log(a,b,typeof a,typeof b)
let A=Number(a)
let B=Number(b)
console.log(A,B,typeof A,typeof B)

//undefined to number conversion
let x;
let y=Number(x);
console.log(x,typeof x);
console.log(y,typeof y)

//null to number conversion
let e=null;
let f=Number(e)
console.log(e,f,typeof e,typeof f)


//conversion of number into boolean
let loggedIn=45;
let ans=Boolean(loggedIn)
console.log(loggedIn,typeof loggedIn,ans,typeof ans)

//conversion  of string into boolean

let string="people"
let at=Boolean(string)
console.log(string,typeof string,at,typeof at)

let s=""
let ss=Boolean(s)
console.log(s,typeof s,ss,typeof ss)

//conversion of undefined to boolean
let u;
let un=Boolean(u);
console.log(u,typeof u,un,typeof un)

//conversion of null to boolean
let h=null;
let hat=Boolean(h);
console.log(h,typeof h,hat, typeof hat)