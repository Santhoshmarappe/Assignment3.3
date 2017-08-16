//Create a Class Animal, should have a name, distance covered by and behavior of that animal:

class animal {
    name: string;
    distance: number;
    sound: string;
    constructor(name: string) {
        this.name = name;
    }
    move(distance: number) {
        this.distance = distance;
        return `${this.name} moved distance of ${this.distance} km`;
    }
    makeSound(sound: string) {
        this.sound = sound;
        return `started  ${this.sound}`;
    }
}

//1 Cat which will extend Animal class with its property and behaviour.

class Cat extends animal {
    constructor(name: string) {
        super(name);
    }
}
//2 Dog which will extend Animal class with its property and behaviour.

class Dog extends animal {
    constructor(name: string) {
        super(name);
    }
}

var BlackCat = new Cat('Cat');
var germanShepherd  = new Dog('Dog');

document.write(`${BlackCat.move(1)} and ${BlackCat.makeSound('Meow...Meow..')}, `);
document.write(`${germanShepherd.move(1.5)} and ${germanShepherd.makeSound('Bow.. bow..')}`);

//Output:Cat moved distance of 1 km and started Meow...Meow.., Dog moved distance of 1.5 km and started Bow.. bow..