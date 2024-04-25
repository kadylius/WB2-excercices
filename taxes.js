function calculateMonthlyTax(salary) {
    return (salary * 0.23).toFixed(2);
}

const salary = 3500; 
const monthlyTax = calculateMonthlyTax(salary);

console.log("Monthly federal taxes withheld: $" + monthlyTax);