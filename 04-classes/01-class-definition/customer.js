"use strict";
class Customer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
let myCustomer = new Customer("Samuel", "Larico");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
