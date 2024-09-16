"use strict";
const reviews = [5, 5, 4.5, 1, 3];
const sum = reviews.reduce((acc, curr) => acc + curr, 0);
console.log("Average with reduce: " + sum / reviews.length);
let total = 0;
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
const avg = total / reviews.length;
console.log("Average with for loop: " + avg);
