// Inheritance and prototype chain in javascript

function Animal(){
    this.eatVeggies = true;
    this.eatMeats = false;
}

function Herbivore(){}
Herbivore.prototype = new Animal();

function Carnivore(){
    this.eatMeats = true;
}
Carnivore.prototype = new Animal();

var rabbit = new Herbivore();
var bear = new Carnivore();

console.log(rabbit.eatMeats);
console.log(bear.eatMeats);


