" use strict"

function calculateFederalTax(grossIncome) {
    let tax = 0;

    if (grossIncome <= 9875) {
        tax = grossIncome * 0.10;
    } else if (grossIncome <= 40125) {
        tax = 987.50 + (grossIncome - 9875) * 0.12;
    } else if (grossIncome <= 85525) {
        tax = 4617.50 + (grossIncome - 40125) * 0.22;
    } else if (grossIncome <= 163300) {
        tax = 14605.50 + (grossIncome - 85525) * 0.24;
    } else if (grossIncome <= 207350) {
        tax = 33271.50 + (grossIncome - 163300) * 0.32;
    } else if (grossIncome <= 518400) {
        tax = 47367.50 + (grossIncome - 207350) * 0.35;
    } else {
        tax = 156235 + (grossIncome - 518400) * 0.37;
    }

    return tax;
}

let grossIncome = 60000;
let federalTax = calculateFederalTax(grossIncome);
console.log("Federal tax for gross income of $" + grossIncome + " is $" + federalTax);