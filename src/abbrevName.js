
/**

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot seperating them.
It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F

 */


function abbrevName(name){
 var parts = name.split("\ ");
 return parts[0].substring(0,1).toUpperCase() + "." + parts[1].substring(0,1).toUpperCase();
}

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));