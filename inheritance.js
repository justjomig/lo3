// Prototype Inheritance
// Person Constructor

function Person(firstName , lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
    return `Aye Captain! ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('They Call Me Walter' , 'Jesse');

console.log(person1.greeting());

// Customer Constructor
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// Inherit the person prototype method