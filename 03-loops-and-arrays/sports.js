var sportsOne = ["Golf", "Soccer", "Tennis", "Swimming"];
sportsOne.forEach(function (el) { return console.log(el); });
console.log("Using for of");
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == 'Cricket') {
        console.log("".concat(tempSport, " is my favorite Sport"));
    }
    else {
        console.log(tempSport);
    }
}
