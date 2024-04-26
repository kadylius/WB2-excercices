"use strict"

//regular salary
let payRate = 20; // $ per hour
let hoursWorked = 45; // total hours worked

// If there is overtime then add the salary which cuts ofs
if(hoursWorked > 40){
    let Overtimehours = hoursWorked - 40; // overtime hours; the hours past 40 hours
    let salary = payRate * 40; // pay with no overtime
    //salary with overtime
    let overtimePayrate = payRate * 1.5; // $ per hour once in overtime
    let overtimeSalary = overtimePayrate * Overtimehours; // salary with just overtime hours

    salary += overtimeSalary;
    console.log(`You worked extra hard and earned $${salary} this week`)
}
else{
    let salary = payRate * hoursWorked;
    console.log(`You earned $${salary} this week`)
}

//three conditions to find out the leap year
let year = 2000;

if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
   console.log(year + ' is a leap year');
} else {
   console.log(year + ' is not a leap year');
}


