"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cricket_couch_1 = require("./cricket-couch");
const golf_coach_1 = require("./golf-coach");
const myCricketCouch = new cricket_couch_1.CricketCoach();
const myGolfCoach = new golf_coach_1.GolfCoach;
const myCoaches = [myCricketCouch, myGolfCoach];
for (const currCoach of myCoaches) {
    console.log(currCoach.getDailyWorkout());
}
