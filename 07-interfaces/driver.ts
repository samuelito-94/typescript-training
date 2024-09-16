import { Coach } from "./coach";
import { CricketCoach } from "./cricket-couch";
import { GolfCoach } from "./golf-coach";

const myCricketCouch = new CricketCoach();
const myGolfCoach = new GolfCoach;

const myCoaches: Coach[] = [myCricketCouch, myGolfCoach];

for (const currCoach of myCoaches) {
    console.log(currCoach.getDailyWorkout());
}