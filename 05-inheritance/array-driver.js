"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./circle");
const rectangle_1 = require("./rectangle");
const shape_1 = require("./shape");
const myShape = new shape_1.Shape(10, 15);
const myCircle = new circle_1.Circle(5, 10, 20);
const myRectangle = new rectangle_1.Rectangle(0, 0, 4, 5);
//declare array of shapes
const shapes = [];
shapes.push(myShape);
shapes.push(myCircle);
shapes.push(myRectangle);
for (let tempShape of shapes) {
    console.log(tempShape.getInfo());
}
