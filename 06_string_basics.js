// In this part we will learn about basics of string
//Strings can be defined with single or double inverted commmas
let a="name"
let b='name'
//console.table([a,b,typeof a,typeof b]);
//we can also explicitly defined strings but the type of string is converted to object
let c=new String("variable")
let d=new String("variable")
//console.table([c,d,typeof c,typeof d])
//concatenation of strings
//console.log(a+b,typeof (a+b))
//string interpolation
//console.log(`${a}${b} ${typeof (a+b)}`)
console.log(`Hello our first varible is ${a} and our second variable is ${b}`)
//string methods
console.log(a.length)
console.log(a.toUpperCase())
console.log(a.charAt(2))
console.log(a.indexOf('m'))
console.log(c.substring(1,4))
console.log(c.slice(-5,-1))
let value="Hello everyone my name is xxx, hello"
console.log(value.replace("Hello","Hii"))
let trime="  hjh kkj  "
console.log(trime)
console.log(trime.trim())
//split method will convert string to array based on a character
let str="practisers"
console.log(str.split('r'));