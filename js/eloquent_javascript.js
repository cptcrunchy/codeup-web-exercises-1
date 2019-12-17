//Create a function that takes two numbers as arguments (num, length)
// and returns an array of multiples of num up to length.
//First create function and function parameters
//Second create a variable for the multiples that accepts an array
//third create a for loop so that the code can be run through the array
//create the argument you want the for loop to execute
//set the var of i for index at zero
//This means that the index is used as an offset.
// **The first element of the array is exactly contained in the memory location that array refers (0 elements away),
// so it should be denoted as array[0]. Most programming languages have been designed this way, so indexing from 0 is pretty much inherent to the language
//the next piece of the argument states that as long as i is less than the length of numbers in an array add 2
 function multiplesOf(numbers, number) { // add second argument
     var multiples = []; // change to array (so that we can store multiple numbers - not just one multiple)
    for (var i = 0; i < numbers.length; i++) {
         if (numbers[i] % number === 0) { // divide by the number
             multiples.push(numbers[i]); // add the current multiple found to the multiples array
        }
    }
     return multiples;
 }

 console.log(multiplesOf([4, 5, 6, 7, 8], 2)); // Output: [4, 6, 8

//Given a total due and an array representing the amount of change in your pocket,
// determine whether or not you are able to pay for the item.
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
//To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true,
//since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 10.50
//create a function called changeEnough
//Takes in two arguments amount of change and amount due
//create variables to identify the amount of change
//create a variable that contains change variable
//create if condition argues change versus amount due
//create else if argument that states false if you don't have enough change

function changeEnough(change, amountDue) {
    var quart = change[0]*0.25;
    var dimes = change[1]*0.10;
    var nickel = change[2]*0.05;
    var pennies = change[3]*0.01;

    var result = quart+dimes+nickel+pennies;

    if(result >= amountDue){
        return true;
    }
    else if(result < amountDue){
        return false;
    }
}
console.log(changeEnough([2, 100, 0, 0], 14.11));

