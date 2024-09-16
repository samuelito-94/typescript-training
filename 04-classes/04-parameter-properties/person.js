"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let myPerson = new Person("Samuel", "Larico");
console.log(myPerson.firstName);
console.log(myPerson.lastName);
