 
var day_born = parseInt(prompt("Please enter your birth date:"));
var month_born = parseInt(prompt("Please enter your birth month:"));
var year_born = parseInt(prompt("Please enter your birth year:"));
var d = new Date();
var n = d.getFullYear();
function getAge(birthYear){
  var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    age = currentYear - birthYear;
    return age;
}
calculatedAge = getAge(year_born ,month_born, day_born);
console.log("Hello, " + "you are " + calculatedAge + " years old!");
