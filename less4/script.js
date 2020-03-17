'use strict';

// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }
//
// Person.prototype.incrementAge = function () {
//     this.age += 1;
// };
//
// function Personal(name, age, gender, location, hobby) {
//     Person.call(this, name, age, gender);
//     this.location = location;
//     this.hobby = hobby;
// }
//
// Personal.prototype = Object.create(Person.prototype);
// Personal.prototype.constructor = Personal;
//
// Personal.prototype.sayName = function () {
//     console.log('Name is ' + this.name);
// };
//
// let personal = new Personal('john', 30, 'male', 'Canada', 'music');
//
// personal.sayName();
//
// personal.incrementAge();
//
// console.log(personal);

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    incrementAge() {
        this.age += 1;
    }
}

let person = new Person('Alex', 25, 'male');
person.incrementAge();

console.log(person);

class Personal extends Person {
    constructor(name, age, gender, location, hobby) {
        super(name, age, gender);
        this.location = location;
        this.hobby = hobby;
    }
    sayName() {
        console.log('Name is ' + this.name)
    }
}

let personal = new Personal('john', 30, 'male', 'Canada', 'music');

personal.incrementAge();
personal.sayName();

console.log(personal);
