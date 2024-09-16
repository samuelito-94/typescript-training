import { Circle } from "./circle";
import { Rectangle } from "./rectangle";
import { Shape } from "./shape";

const myShape = new Shape(10, 15);
console.log(myShape.getInfo());

const myCircle = new Circle(5, 10, 20);
console.log(myCircle.getInfo());

const myRectangle = new Rectangle(0, 0, 4, 5);
console.log(myRectangle.getInfo());