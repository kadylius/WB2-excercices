"use strict"

// Get the current date, month and year
let today = new Date();
let dd = today.getDate();
let yyyy = today.getFullYear();

// Get the month (adding 1 because months are zero-based)
let mm = today.getMonth() + 1;

// Add leading zero if the day is less than 10
if (dd < 10) {
    dd = '0' + dd;
} 

// Add leading zero if the month is less than 10
if (mm < 10) {
    mm = '0' + mm;
} 

// Format the date as mm/dd/yyyy and log it
console.log("Today's date is " + mm + '/' + dd + '/' + yyyy);


// time
let d = new Date(); // get current date
let hour = d.getHours(); // get current hour
let minute = d.getMinutes(); // get current minute

  if (hour < 0 && minute < 9 && minute < 59)
    console.log("Good morning");
  else if (hour <= 9 && hour <16 && minute < 59 )
    console.log("Good aferternoon");
  else if (hour < 17 && hour < 23 && minute < 59)
    console.log("good evening");




