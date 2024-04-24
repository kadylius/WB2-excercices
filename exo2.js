"use script"

age = 10
let requiredage = 21
if(age > 20 ) {
    console.log('You are old enough to enter the party');
}
else
{
    console.log("You need to wait "+ requiredage, "to enter the party");
}

// sample inputs
var foodCost = 79.25;
var tax = 6.54;
var tip = 12.00;
// calculation
var totalDue = foodCost + tax + tip;
// output
console.log("The total due is " + totalDue);

// sample inputs
var foodCost = 79.25;
var tax = 6.54;
var tip = 12.00;
// calculations
var totalDue = foodCost + tax + tip;
// output
console.log("The total due is " + totalDue);


let foodcost = 79.25;
let tax = 6.54;
let tip = 12.00;
let totaldue = foodcost + tax + tip;
console.log(`Your bill including tax and tip is: ${foodCost} and tax is ${tax}`);
console.log(`Tip is: ${tip.toFixed}`);
console.log(`Total due is ${totaldue}`);