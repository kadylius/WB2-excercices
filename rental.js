"use strict"

let groupies=math.round (math.random()*100);
let fullvan=math.ceil(groupies/15);
let cost=(fullvan * 250);
let individualcost = cost/groupies
console.log(`there are ${groupies} groupies attending the tour, which 
means we will need ${fullvan} vans, which should cost $${cost} total. 
If the groupies split the bill it will cost $${individualcost.toFixed(2)} per groupie.`)