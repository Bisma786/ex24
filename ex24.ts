// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function


const strOne: string="Bye";
const strTwo: string="bye";
console.log(strOne===strTwo);//false
console.log(strOne !== strTwo); //true

// • Tests using the lower case function

const sent1:string="How Are You?"
const sent2:string="how are you?"
console.log(sent1.toLowerCase()=== sent2);//true

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1: number=40
const num2:number=20

console.log(num1=== num2);//false
console.log(num1!== num2);//true
console.log(num1 > num2);//true
console.log(num1< num2);//fa;se
console.log(num1>= num2);//true
console.log(num1<=num2);//false

// • Tests using "and" and "or" operators
const a:number=7;
const b:number=9;
const c:number=11;

console.log(a < b && b<c ); //true , both consitions are true;

console.log(a<b || b>c); //true, at least one condiition is true.

console.log(a>b && b<c); //false, both consdition are false.

console.log(a>b||b>c); // false, both conditions are false


// • Test whether an item is in a array

const nuts: string[]=['almonds','walnuts','cashew','pistachio','hazelnuts'];
console.log(nuts.includes('cashew')); //true
console.log(nuts.includes('rasins')); //false

// • Test whether an item is not in a array
const drynuts: string[]=['almonds','walnuts','cashew','pistachio','hazelnuts'];
console.log(!drynuts.includes('figs'));//true
console.log(!drynuts.includes('pistachio')); 
//false



