class Person {
    private _firstName: string;
    
    private _lastName: string;
    
    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName(): string {
        return this._firstName;
    }
    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }
    set lastName(value: string) {
        this._lastName = value;
    }
}

let myPerson = new Person("Samuel", "Larico");

console.log(myPerson.firstName);
console.log(myPerson.lastName);