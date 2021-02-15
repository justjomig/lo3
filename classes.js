// ES6 Classes

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getMarried(newLastName){
        this.lastName = new.LastName;
    }

    greeting(){
    return `Aye Captain! ${this.firstName} ${this.lastName}`;
    
    }

    static addNumbers(x , y){
        return x + y;
    }
}

const cyka = new Person('Cyka' , 'Blyat', '02-15-2021');

cyka.getMarried('Gaben');
console.log(cyka);