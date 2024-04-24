"use strict"

let savings = 3000; // Initial savings amount
let formula = 72; // The constant for the rule of 72
let expectedrate = 6; // Expected annual interest rate (in percentage)
let doublex = formula / expectedrate; // Number of years for the investment to double
let savingstot = savings * doublex; // Future value of the savings account

console.log(`At a ${expectedrate}% interest rate, your savings account will be worth $${savingstot.toFixed(2)} in ${doublex.toFixed(1)} years`);