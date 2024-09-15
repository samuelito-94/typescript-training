var reviews = [5, 5, 4.5, 1, 3];
var sum = reviews.reduce(function (acc, curr) { return acc + curr; }, 0);
console.log("Average with reduce: " + sum / reviews.length);
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
console.log("Average with for loop: " + total / reviews.length);
