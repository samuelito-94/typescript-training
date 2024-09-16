import { Circle } from "./circle";
import { Rectangle } from "./rectangle";
import { Shape } from "./shape";

const myShape = new Shape(10, 15);
const myCircle = new Circle(5, 10, 20);
const myRectangle = new Rectangle(0, 0, 4, 5);

//declare array of shapes
const shapes: Shape[] = [];

shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);

for (let tempShape of shapes) {
    console.log(tempShape.getInfo());
}