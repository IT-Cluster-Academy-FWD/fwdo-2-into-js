var mass = 100; // kg
var acceleration = 20; // m/s**2

console.log(mass * acceleration);

var firstName = prompt("What's yor name?");

var age = prompt("What's your age?");

var message = "Hello ";

if (firstName == null || firstName == "") {
  message = message + "Unknown";
} else {
  message = message + firstName;
}

if (age >= 18)  {
  message = message + " you can vote";
} else {
  message = message + " you can't vote";
}

document.getElementById("welcome").innerHTML = message;
