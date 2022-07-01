function isprm(n)
{
if (n <= 1)
return 0;
if (n <= 3)
return 1;
if (n % 2 == 0 || n % 3 == 0)
return 0;
 for (var i = 5;
i * i <= n; i = i + 6) {
if (n % i == 0 || n % (i + 2) == 0)
return 0;
}
return 1;
}
function countprime(n)
{
var count = 0;
 var primevector = [];
 for(var i = 2; i <= n; i++) {
if (isprm(i) == 1) {
 primevector.push(i);
}
}
var sum = primevector[0];
 console.log(n)
let arr=[];
for (var i = 1;
i < primevector.length; i++) {
 sum += primevector[i];
if (sum > n)
break;
if (isprm(sum) == 1) {
arr.push(sum)
}
}
return arr;
}
 var N = 200;
console.log((countprime(N)));



