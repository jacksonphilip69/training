//sum of two 

function myfunction(a,b)
{
    result = a + b
     return result
}

// To check equal

function myFunction(a, b) {
    return a === b;
  }

// type of value

function myFunction(a) {                             // =(a)=>
    return typeof a;
 }

//return nth 

function myFunction(a, n)
{
const string = "a , n"
return string[n];
}

//return 3rd character

 slice=(a)=>
{
    return word.slice(3)
}

//remove last three 
lastthree=(str)=> 
 {
    return str.slice(-3);
 }

 //get first 3 characters

 firstthree=(a)=>
 {
     return a.slice(0,3)
 }


 //To Extract first half

 firsthalf=(a)=>
 {
    return a.slice(0, a.length / 2);
 }

 //To show last three n characters

 lastthree=(a)=>
 {
    return a.slice(0, -3);

 }

 //To return percentage of a number               

 percentage=(a,b)=>                                             
 {
     return (a/100)*b 
 }

 //even numbers 

evennumbers=(a)=>{         
 return a % 2 === 0
} 

//math operators

function myFunction(a, b, c, d, e, f) {
    return (((a + b - c) * d) / e) ** f;
 }

 //no of times character occurs

 function myFunction(a, b) {
    return b.split(a).length - 1
  }

  //whole number

  function myFunction(a) {
    let num = a
    return (num%1==0)

 }
