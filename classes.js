class Dog {
    constructor(){
        this.name = "Candy";
        this._power = "value";
    }

    get power(){
        return this.name;
    }

    get tt(){
        return this._power;
    }

    set power(newValue){
        this._power = newValue;
    }
}
function Person() {
    this.name = "Me";
}

const dog = new Dog();
const person = new Person();

console.log(dog);

Dog.prototype.bark = function() {
    console.log("hi, woof, I'm " + this.name + " woof");
}
Person.prototype.bark = function() {
    console.log("hi, woof, I'm " + this.name + " woof");
}
dog.bark();
person.bark();
console.log(dog, person, Person);
console.log(dog.tt, dog.power);
dog.power = "this is it";
console.log(dog.power, dog.tt);
