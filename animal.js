//Create a Class Animal, should have a name, distance covered by and behavior of that animal:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var animal = (function () {
    function animal(name) {
        this.name = name;
    }
    animal.prototype.move = function (distance) {
        this.distance = distance;
        return this.name + " moved distance of " + this.distance + " km";
    };
    animal.prototype.makeSound = function (sound) {
        this.sound = sound;
        return "started  " + this.sound;
    };
    return animal;
}());
//1 Cat which will extend Animal class with its property and behaviour.
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    return Cat;
}(animal));
//2 Dog which will extend Animal class with its property and behaviour.
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    return Dog;
}(animal));
var BlackCat = new Cat('Cat');
var germanShepherd = new Dog('Dog');
document.write(BlackCat.move(1) + " and " + BlackCat.makeSound('Meow...Meow..') + ", ");
document.write(germanShepherd.move(1.5) + " and " + germanShepherd.makeSound('Bow.. bow..'));
//Output:Cat moved distance of 1 km and started Meow...Meow.., Dog moved distance of 1.5 km and started Bow.. bow.. 
