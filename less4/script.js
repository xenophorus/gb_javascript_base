'use strict';

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

Person.prototype.incrementAge = function () {
    this.age += 1;
};

// let person1 = new Person('Alex', 20, 'male');
// person1.incrementAge();
// console.log(person1);

function Personal(name, age, gender, location, hobby) {
    Person.call(this, name, age, gender);
    this.location = location;
    this.hobby = hobby;
}

Personal.prototype = Object.create(Person.prototype);

let personal = new Personal('john', 30, 'male', 'Canada', 'music');



console.log(personal);


