            //latinsquare

// function printLatin(n)
// {
// var k = n + 65;
// for (let i = 1; i <= n; i++)
// {
// let temp = k-64;
// var str ="";
// while (temp <= n)
// {
// let p = temp + 64;
// str +=String.fromCharCode(p) + " ";
// temp++;
// }
// for (let j = 65; j<k; j++){
// str +=String.fromCharCode(j) + " ";
// }
// console.log(str)
// k--;
// }
// }
// let n=4
// printLatin(n)

//                             //string replace

// str= "welcome to mettl";
// console.log("orginal string:",str)

// newstr = str.replace( /l/g,"");
// console.log("new string:" ,newstr)
    


// str= "lord of rings";
// console.log("orginal string:",str)

// newstr = str.replace( /o/g,"");
// console.log("new string:" ,newstr)







// //     //substring

// let str =" i am good"
// let newstr ="good"
// let result =str.search(newstr)
// console.log(result);


//       //reverse a string

// var a ="I Am Good";
//  reverse = "";
//  console.log(a.split(/\s/).reverse().join(" "));

//       //remove spaces

//       let string= "I am Good";
//        result=string.split(" ").join("")
//        console.log(result)
      


// // most occuring
// str = "happy coding"
// {
// let b = 0
// a = ''
// str.split('').forEach(function(c){
// if(str.split(c).length > b) {
// b = str.split(c).length
// a = c
//  }
// })
// console.log(a);
// }

//                     //Find the two numbers, which give you the given sum

// function findPair(input, sum) {
//     for(let i = 0; i < input.length; i++) {
//       for(let j = i; j < input.length; j++) {
//         if(input[i] + input[j] == sum) return [input[i], input[j]];
//       }
//     }
//     return [];
//   }
  
//   console.log(findPair([1,2,3,4,5], 5))


                      // diamond patter
 let n = 5;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(' ')
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    process.stdout.write('*')
  }
  console.log();
}
for (let i = 1; i <= n - 1; i++) {

  for (let j = 0; j < i; j++) {
     process.stdout.write(' ');
  }
  
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    process.stdout.write('*');
  }
  console.log();
}

                //anagram
 function anagram(str1, str2) { 
   if (str1.length !== str2.length) {
    return( "Not An Anagram");
  } else {
 if (
 str1.toLowerCase().split("").sort().join("") ===  str2.toLowerCase().split("").sort().join("")
 ) {
 return( "Anagram");
 } else {
 return( "Not an Anagram");
}
}
}
console.log(anagram("ppale", "apple"));
console.log(anagram("Eat", "Ate"));

                    

























function isprm(n)
{

    // Base Case

    if (n <= 1)

        return 0;

    if (n <= 3)

        return 1;

    if (n % 2 == 0 || n % 3 == 0)

        return 0;
 

    // Iterate till [5, sqrt(N)] to

    // detect primality of numbers

    for (var i = 5;

         i * i <= n; i = i + 6) {
 

        // If N is divisible by i

        // or i + 2

        if (n % i == 0 || n % (i + 2) == 0)

            return 0;

    }
 

    // Return 1 if N is prime

    return 1;
}
 
// Function to count the prime numbers
// which can be expressed as sum of 
// consecutive prime numbers

function countprime(n)
{

    // Initialize count as 0

    var count = 0;
 

    // Stores prime numbers

    var primevector = [];
 

    for (var i = 2; i <= n; i++) {
 

        // If i is prime

        if (isprm(i) == 1) {

            primevector.push(i);

        }

    }
 

    // Initialize the sum

    var sum = primevector[0];
 

    // Find all required primes upto N

    for (var i = 1;

         i < primevector.length; i++) {
 

        // Add it to the sum

        sum += primevector[i];

        if (sum > n)

            break;

        if (isprm(sum) == 1) {

            count++;

        }

    }
 

    // Return the final count

    return count;
}
 
// Driver Code
// Given number N

var N = 45;
// Function Call
document.write( countprime(N))
