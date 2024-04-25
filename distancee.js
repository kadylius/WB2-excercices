"use strict"

const distance = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1); 

let x1 = 1
let y1 = 5

let x2 = 4
let y2 = 5

let d = distance(x1, y1, x2, y2)

console.log(`The distance between (${x1}, ${y1}) and (${x2}, ${y2}) is ${d}`)
