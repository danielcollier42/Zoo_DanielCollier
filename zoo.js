animalPopulation = 0;

function run() {
    var tigger = new Tiger("Tigger");
    // tigger.eat("meat");
    var pooh = new Bear("Pooh");
    // pooh.eat("fish");
    // pooh.eat("meat");
    var rarity = new Unicorn("Rarity");
    // rarity.eat("marshmallows");
    // rarity.sleep();
    var gemma = new Giraffe("Gemma");
    // gemma.eat("meat");
    // gemma.eat("leaves");
    // gemma.sleep();
    var stinger = new Bee("Stinger");
    // stinger.eat("ice cream");
    // stinger.eat("pollen");
    // stinger.sleep();

    var zoebot = new Zookeeper("Zoebot");
    zoebot.feedAnimals([tigger, pooh, rarity, gemma], "Broccoli");

    console.log(Animal.getPopulation());

}

class Animal {

    constructor(name,favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }

    static getPopulation() {
        return animalPopulation;
    }


    sleep() {
        console.log(this.name + " sleeps for 8 hours ");
    }

    eat(food) {
        console.log(this.name + " eats " + food);
        if(food == this.favoriteFood){
            console.log("YUM! " + this.name + " wants more " + food);
        } else {
            this.sleep();
        }
    }
}

class Tiger extends Animal{

    constructor(name) {
        super(name, "meat");
    }
}

class Bear extends Animal{

    constructor(name) {
        super(name, "fish");
    }

    sleep() {
        console.log(this.name + " hibernates for 4 months");
    }
}

class Unicorn extends Animal{

    constructor(name) {
        super(name, "marshmallows");
    }
    sleep(){
        console.log(this.name + " sleeps on a cloud");
    }
}

class Giraffe extends Animal{

    constructor(name) {
        super(name, "leaves");
    }
    eat(food){
        if(food == this.favoriteFood) {
            console.log(this.name + " eats " + food);
            console.log("YUM! " + this.name + " wants more " + food);
        } else if(food != this.favoriteFood){
            console.log("YUCK!" + this.name + " will not eat " + food);
        }
    }
}

class Bee extends Animal{

    constructor(name) {
        super(name, "pollen");
    }
    eat(food) {
        if (food == this.favoriteFood) {
            console.log(this.name + " eats " + food);
            console.log("YUM! " + this.name + " wants more " + food);
        } else if (food != this.favoriteFood) {
            console.log("YUCK! " + this.name + " will not eat " + food);
        }
    }
    sleep(){
        console.log(this.name + " never sleeps");
    }
}

class Zookeeper{

    constructor(name){
        this.name = name;
    }

    feedAnimals(animals, food){
        console.log(this.name + " is feeding " + food + " to " + animals.length + " animals of " + Animal.getPopulation() + " animals");
        for(var i = 0; i < animals.length; i++){
            animals[i].eat(food);
        }
    }
}