"use strict";
let sportsOne = ["Golf", "Soccer", "Tennis", "Swimming"];
sportsOne.forEach(el => console.log(el));
console.log("Using for of");
for (let tempSport of sportsOne) {
    if (tempSport == 'Soccer') {
        console.log(`${tempSport} is my favorite Sport`);
    }
    else {
        console.log(tempSport);
    }
}
