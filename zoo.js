//PART I:

//Instructions:

// In this tutorial, we're going to learn about Object-Oriented Programming in JavaScript. What is that? It's a
// programming paradigm based on the concept of "objects" – things that contain data, and functions that perform operations on those data.
//
//     That sounds pretty vague. But worry not! We will start what we already know in JS – namely, functions, variables,
// etc. – and build our object-oriented program from there.
//
//     In WebStorm create a new project and a new HTML file and a linked JS script file called 'zoo.js'.
//
//     Next, in your zoo file write a sleep() function that takes an argument called name. This function should console.log
// “<name> sleeps for 8 hours" each time it's called.
//
// Then, create a “run” function in your script which calls  sleep("Tigger");
//
// Next, add a button to your HTML page with an onClick="run()" click handler.
//
//     Clicking the button should print this output to the console:
//
//     Tigger sleeps for 8 hours

//Code:

//     function run() {
//         sleep("Tigger");
//     }
//
//     function sleep(name) {
//         console.log(name + " sleeps for 8 hours");
//     }

//Part II:

//Instructions

// Great! Now, you'll write another function and use an if-statement. We'll also use a variable called favoriteFood to
// keep track of a Tiger's favorite food.
//
// We refer to the favoriteFood variable as a "global" variable in this case since it is in the outermost (global) scope
// of the zoo file – as opposed to it being inside a function or another statement that has curly braces. If the variable
// was defined inside a function, we would say it's "in the function’s scope".
//
// Declare your global variable like this - inside of the zoo.js file, but outside of any functions:
//
//     var favoriteFood = “bacon”;
//
// Next, write a function named eat() that takes two arguments: name and food. This function should log "<name> eats
// <food>" to the console each time it's called.
//
// But wait – there's more! The eat function should check if the food argument is equal to the global variable favoriteFood.
// If the values are equal, the function should then also print "YUM!!! <name> wants more <food>". If they are not equal,
// the eat function should call your sleep function and pass the value of name as an argument to sleep.
//
// Adding these calls to your run function:
//
// eat("Tigger", "meat")
// eat("Tigger", "bacon")
//
// should print this output exactly:
//
//     Tigger eats meat
// Tigger sleeps for 8 hours
// Tigger eats bacon
// YUM!!! Tigger wants more bacon

//Code:

// var favoriteFood = "bacon";
//
// function run() {
//     eat("Tigger", "meat");
//     eat("Tigger", "bacon");
// }
//
// function sleep(name) {
//         console.log(name + " sleeps for 8 hours");
// }
//
// function eat(name, food){
//     console.log(name + " eats " + food);
//     if(food == favoriteFood){
//         console.log("YUM!" + name + " wants more " + food);
//     } else {
//         sleep(name);
//     }
// }

// Part III:

//Instructions:

// Introduction to Classes:
// Your friend Zoe, the zookeeper, has seen the code you wrote, and thinks it could help her. She says that the eat function
// you wrote in Part II perfectly describes tigers. Let's write a small program to help Zoe keep track of her tigers and
// their eating and sleeping habits. This time we'll make a Tiger class! But first, let's talk about what classes and objects are...
//
// Classes are the main way in which you can encapsulate (or group together) different variables and functions, as being
// part of one single object. Classes create a blueprint for outputting new objects (we'll talk about objects in just a
// moment)! You can declare a class like this, notice the two main parts of a JavaScript class: constructor and function(s).
//
//
//
// The keyword this refers to the current object's scope. Inside of the constructor (and also inside any functions you
// write in your class), you refer to your class-scope variables via the this.myVariable syntax. This signifies that that
// variable is unique to the instance of the class – which means that there are separate myVariables for each instance of
// the class that you instantiate (or create).  You have to use this for function calls within a class as well: this.sayName()
//
//
// What's going on?
//
// The above code creates a new class (not an object!) called Polygon. This class has:
//
// three instance variables called height, width and name
// a constructor -- the function called….constructor
// two functions called sayName and sayHistory that print out various info to the console
//
// Constructors and creating new objects from a class
//
// Now that we have defined the Polygon class, we can use it to create new objects and save them to variables! These objects
// belong to a new, custom data type called Polygon. Objects represent a living piece of data. You can modify variables and
// call functions on each of them.
//
//     To create a new instance of the Polygon class, we create and name a new variable and use the special new key word
// to indicate that it is an instance of the Polygon class.
//
// var p1 = new Polygon(20, 40);
// var p2 = new Polygon(100, 200);
//
// Properties
//
// We can access an object's properties (the variables that belong to it) using dot syntax.
//
// We call variables defined in a class instance variables because they belong to a specific instance (or object) of the
// class. The words instance and object are interchangable!
//
//     p1.width; //40
// p2.width; //200
//
// We can use dot syntax with an assignment operator (=) to update variables as well.
//
//     p2.width = 100;
//
// Since p1 and p2 are separate instances of the Polygon class, they have separate versions of their instance variables
// and can be changed independently.  Changing p2.width does not affect p1.width or the Polygon class in any way.
//
//     Functions
//
// In addition to a constructor and properties, classes can define functions as well. These are called on an instance
// (object) using the same dot syntax that properties use, only using the () function indicator.
//
// p1.sayName()
// p2.sayHistory()
//
// Now, copy our Polygon class into your zoo.js file.   Add the p1 and p2 instances and to your run function and then
// call sayName and sayHistory on your instances.  The function calls should have printed out messages to the console.
// Functions need to be called with dot syntax on an instance (object). They can have parameters and return values and
// are defined with the normal function syntax.
//
// Back to the Zoo!
//
//     Below is an unfinished Tiger class. When completed, this class should contain a constructor defining two instance
// variables: name and favoriteFood.  This class should also contain eat and sleep functions similar to the functions you
// wrote earlier (you can copy them from your class), but they need to be modified slightly.
//
//     Instead of taking a tiger's name as an argument, the sleep function should use the name instance variable (this.name)
// when it prints "<name> sleeps for 8 hours".  Similarly, the eat function should use the name instance variable, but should
// take a food argument, because a tiger doesn't know what food it's going to eat until a zookeeper feeds it.
//
// The constructor should take a name argument and set the tiger's name instance variable to the value provided. The constructor
// also sets the favoriteFood instance variable to "meat" because all tigers like meat.
//
// class Tiger {
//
//     constructor(name) {
//         // put your constructor content here
//     }
//
//     sleep() {
//         // complete your sleep function here
//     }
//
//     eat(food) {
//         // complete your eat function here!
//     }
// }
//
// Remember to specify the this keyword in front of all variables and functions you want to call that are members of the
// class!  So like this.favoriteFood and this.sleep().
//
//     Finally, in your run() function, create a new instance of your Tiger class and feed it meat and kibble:
//
//     var tigger = new Tiger("Tigger");
// tigger.eat("meat");
// tigger.eat("kibble");
//
// When you're done, check your output. It should read as follows:
//
// Tigger eats meat
// YUM!!! Tigger wants more meat
// Tigger eats kibble
// Tigger sleeps for 8 hours
//
// If not, go back and re-read the instructions and make it so.  You should only have the 3 lines above in your run() function.
//
// ----  NICE WORK!! ----
//
//     It’s probably a good time to clean up now.  You can safely remove the global favoriteFood variable.  You can remove
// the Polygon instances from the run function and we ~probably~ wont need the Polygon class any more?  But we worked so
// hard on that and it might come in handy again later (hint, hint)?  So a good practice here is to comment out code that
// we may need again and put it at the bottom of your file!  Select the lines and enter command + “ / ”  for a multiline
// comment or uncomment!

//Code:

// function run() {
//     var tigger = new Tiger("Tigger");
//     tigger.eat("meat");
//     tigger.eat("kibble");
// }
//
// class Polygon {
//
//     constructor(height, width) {
//         this.name = 'Polygon';
//         this.height = height;
//         this.width = width;
//     }
//
//     //function #1
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//
//     //function #2
//     sayHistory() {
//         console.log('"Polygon" is derived from the Greek polus (many) ' +
//             'and gonia (angle).');
//     }
//
// }
//
// class Tiger {
//
//     constructor(name) {
//         this.name = name;
//         this.favoriteFood = "meat";
//     }
//
//     sleep() {
//         console.log(this.name + " sleeps for 8 hours");
//     }
//
//     eat(food) {
//         console.log(this.name + " eats " + food);
//         if(food == this.favoriteFood){
//             console.log("YUM!" + this.name + " wants more " + food);
//         } else {
//             console.log(this.name + " sleeps for 8 hours");
//             //sleep();  -> For some reason, it won't let me call this function from here (not sure if I am missing something...)
//         }
//     }
// }

//Eat and sleep functions:

// function sleep(name) {
//     console.log(name + " sleeps for 8 hours");
// }
//
// function eat(name, food){
//     console.log(name + " eats " + food);
//     if(food == favoriteFood){
//         console.log("YUM!" + name + " wants more " + food);
//     } else {
//         sleep(name);
//     }
// }

//Part IV:

//Instructions:

// Part IV in which a Wild Bear Appears!  (Oh my!!)
//
// Zoe says your program is really helping her keep track of the tigers! As a result, Zoe has been promoted at the zoo.
// She's now in charge of tigers and bears, which means your program now needs to describe bear behaviors as well!
//
// Let’s create a new class called Bear, which should be very similar to your Tiger class. The Bear class should define
// the same name and favoriteFood instance variables, because Bears have a name and a favoriteFood just like Tigers. The
// constructor function should take one argument, name, and set the name instance variable to its given value and favoriteFood
// to "fish".  The eat function for the Bear class should also be exactly the same as in the Tiger class. Remember, if
// eat is called with anything other than their favoriteFood then it will sleep!  But Bears sleep very differently than
// Tigers, so the sleep function for the Bear class should print "<name> hibernates for 4 months" instead to reflect the
// difference in their sleeping behavior.
//
//     Finally, in your run function, create instances of the Tiger and Bear objects and then call their eat function to
// test its behavior.
//
//     var tigger = new Tiger("Tigger");
// tigger.eat("meat");
// tigger.eat("kibble");
// var pooh = new Bear("Pooh");
// pooh.eat("fish");
// pooh.eat("meat");
//
// Should output:
//
//     Tigger eats meat
// YUM!!! Tigger wants more meat
// Tigger eats kibble
// Tigger sleeps for 8 hours
// Pooh eats fish
// YUM!!! Pooh wants more fish
// Pooh eats meat
// Pooh hibernates for 4 months
//
//
// We probably wont need our eat() and sleep() functions again.  Let’s comment them out though just to be safe!

//Code:

// function run() {
//     var tigger = new Tiger("Tigger");
//     tigger.eat("meat");
//     tigger.eat("kibble");
//     var pooh = new Bear("Pooh");
//     pooh.eat("fish");
//     pooh.eat("meat");
//
// }
//
// class Polygon {
//
//     constructor(height, width) {
//         this.name = 'Polygon';
//         this.height = height;
//         this.width = width;
//     }
//
//     //function #1
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//
//     //function #2
//     sayHistory() {
//         console.log('"Polygon" is derived from the Greek polus (many) ' +
//             'and gonia (angle).');
//     }
//
// }
//
// class Tiger {
//
//     constructor(name) {
//         this.name = name;
//         this.favoriteFood = "meat";
//     }
//
//     sleep() {
//         console.log(this.name + " sleeps for 8 hours");
//     }
//
//     eat(food) {
//         console.log(this.name + " eats " + food);
//         if(food == this.favoriteFood){
//             console.log("YUM!" + this.name + " wants more " + food);
//         } else {
//             this.sleep();
//         }
//     }
// }
//
// class Bear {
//
//     constructor(name) {
//         this.name = name;
//         this.favoriteFood = "fish";
//     }
//
//     sleep() {
//         console.log(this.name + " hibernates for 4 months");
//     }
//
//     eat(food) {
//         console.log(this.name + " eats " + food);
//         if(food == this.favoriteFood){
//             console.log("YUM!" + this.name + " wants more " + food);
//         } else {
//             this.sleep();
//         }
//     }
// }

//Part V:

//Instructions:

// Zoe got promoted AGAIN! She just found out that she's getting assigned three more animals tomorrow: Giraffes, Bees, and... Unicorns! What kind of petting zoo is this, anyways?!?!
//
// Before Zoe asks you for three new classes tomorrow, let's rewrite our code to save us some time. Create a class called Animal, which will act as our superclass (we'll explain this in a moment).
//
// Animal’s constructor should contain both instance variables (name and favoriteFood). The constructor function should take two arguments that sets the value of both name and favoriteFood. Our eat and sleep functions should be exactly the same as the Tiger class you wrote in Part 3.
//
// class Animal {
//
//     constructor(name,favoriteFood) {
//         // initialize your instance vars here
//     }
//
//     sleep() {
//         // complete your sleep function here
//
//     }
//
//     eat(food) {
//         // complete your eat function here
//
//     }
// }
//
// You might be wondering how this Animal class is going to save us any time? After all, we're going to have to write three more classes for Giraffe, Bee, and Unicorn, right?
//
// Yes – but you might have noticed that all of the animals we've wrote classes for have a few similarities. For one, all animals seem to have a name and a favoriteFood. They also all seem to have eat and sleep functions, even though the specific behaviors of the functions might be different. What if we could put together all the similar parts of all animals into one parent class, and then write just the unique parts for each animal in their own child classes?
//
// This is the problem that class inheritance in JavaScript solves for us. A class can actually inherit (or borrow behavior) from another class, like so:
//
//
//
//
//
//
//     class Shape {
//
//         constructor(name) {
//             this.name = name;
//             this.special = true;
//         }
//
//         sayName() {
//             console.log('Hi, I am a ', this.name + '.');
//         }
//
//         sayHistory() {
//             console.log("Shapes have a wonderful history.");
//         }
//     }
//
// Oh heeeeey!!  We can grab our Polygon class out of the freezer and use it again here.  Let’s multiline uncomment - select function then hit command + /.
//
// Let’s make a few changes:  add “extends Shape” to the declaration and add the special “super('Polygon')” call to the constructor.   Let’s also delete the entire sayName() function from Polygon.
//
//     class Polygon extends Shape {
//
//     constructor(height, width) {
//         super('Polygon');
//         this.height = height;
//         this.width = width;
//     }
//
//     sayHistory() {
//         console.log('"Polygon" is derived from the Greek polus (many) ' +
//             'and gonia (angle).');
//     }
//
// }
//
// Let’s look at a few different things going on here. We have a superclass - Shape and a subclass, Polygon.  In the subclass definition: class Polygon extends Shape – this sets up the inheritance relationship allowing Polygon to inherit all the instance variables and functions of Shape.
//
//     Next let’s look at the super(name) call in Polygon’s constructor. "super" calls the constructor one level up in the inheritance tree, in this case Shape.  Here, the superclass initializer is called, setting name to whatever is passed in when creating a Polygon.
//
//     Lastly: "overriding" functions. To override (or redefine) a function in the superclass of the same name. In this case, Polygon’s sayHistory() function overrides the same function in the Shape class.
//
// A subclass will inherit all of its superclass’s functions.  Any function in the subclass with the same name and parameters as a function in the superclass will override that function and be used when called rather than the function in the superclass.
//
//     In your run function, create an instance of Shape and another of Polygon.  Call sayName() and sayHistory() on both and watch what happens.  Whoa.
//
//     That was fun.  You can go ahead and comment out Shape and Polygon and remove the instances and function calls from run() now.

//Code:

// function run() {
//     var p1 = new Polygon;
//     p1.sayName();
//     p1.sayHistory();
// }
// class Animal {
//
//     constructor(name,favoriteFood) {
//         this.name = name;
//         this.favoriteFood = favoriteFood;
//     }
//
//     sleep() {
//         console.log(this.name + " sleeps for 8 hours ");
//     }
//
//     eat(food) {
//         console.log(this.name + " eats " + food);
//         if(food == this.favoriteFood){
//             console.log("YUM!" + this.name + " wants more " + food);
//         } else {
//             this.sleep();
//         }
//     }
// }
//
// class Tiger {
//
//     constructor(name) {
//         this.name = name;
//         this.favoriteFood = "meat";
//     }
//
//     sleep() {
//         console.log(this.name + " sleeps for 8 hours");
//     }
//
//     eat(food) {
//         console.log(this.name + " eats " + food);
//         if(food == this.favoriteFood){
//             console.log("YUM!" + this.name + " wants more " + food);
//         } else {
//             this.sleep();
//         }
//     }
// }
//
// class Bear {
//
//     constructor(name) {
//         this.name = name;
//         this.favoriteFood = "fish";
//     }
//
//     sleep() {
//         console.log(this.name + " hibernates for 4 months");
//     }
//
//     eat(food) {
//         console.log(this.name + " eats " + food);
//         if(food == this.favoriteFood){
//             console.log("YUM!" + this.name + " wants more " + food);
//         } else {
//             this.sleep();
//         }
//     }
// }
//
// class Shape {
//
//     constructor(name) {
//         this.name = name;
//         this.special = true;
//     }
//
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//
//     sayHistory() {
//         console.log("Shapes have a wonderful history.");
//     }
// }
//
// class Polygon extends Shape {
//
//     constructor(height, width) {
//         super('Polygon');
//         this.height = height;
//         this.width = width;
//     }
//
//     sayHistory() {
//         console.log('"Polygon" is derived from the Greek polus (many) ' +
//             'and gonia (angle).');
//     }
//
// }

//Part VI:

//Instructions:
// Now, let's implement these crazy new ideas in our zoo!  Modify your Bear and Tiger classes to make them both subclasses of Animal. Tiger should inherit fully from the Animal class. This means that Tiger will automatically contain the eat and sleep functions defined in Animal. To complete the Tiger class, all you need to write is a constructor function that takes a name argument and passes it off to the Animal initializer, along with a literal string "meat", because remember: all tigers like meat. :-)
//
// Don't forget to use the super keyword like in Polygon!
//
// The Bear class should also inherit from the Animal class and have the same contructor as the Tiger class, except that it should pass a value  of "fish" for favoriteFood because all bears like fish. However, to capture bears' different sleeping behavior, you'll need to override the sleep function so that it prints the correct message (refer to part 4 if you need a reminder what the sleep function should print).
//
// //Tiger and Bear subclasses below
// class Tiger extends Animal {
//
//     constructor(name) {
//         super(name, “meat”);
//     }
// }
//
// class Bear extends Animal {
//     // complete the Bear class here, using the completed Tiger class as an example
//
//     // here, we override the sleep function
//     sleep() {
//         // add in your Bear-specific sleep code here
//     }
// }
//
// When you're done, your runner class should output the same thing as before:
//
// Tigger eats meat
// YUM!!! Tigger wants more meat
// Pooh eats fish
// YUM!!! Pooh wants more fish
// Pooh eats meat
// Pooh hibernates for 4 months

//Code:

// function run() {
//     var tigger = new Tiger("Tigger");
//     tigger.eat("meat");
//     tigger.eat("kibble");
//     var pooh = new Bear("Pooh");
//     pooh.eat("fish");
//     pooh.eat("meat");
// }
// class Animal {
//
//     constructor(name,favoriteFood) {
//         this.name = name;
//         this.favoriteFood = favoriteFood;
//     }
//
//     sleep() {
//         console.log(this.name + " sleeps for 8 hours ");
//     }
//
//     eat(food) {
//         console.log(this.name + " eats " + food);
//         if(food == this.favoriteFood){
//             console.log("YUM! " + this.name + " wants more " + food);
//         } else {
//             this.sleep();
//         }
//     }
// }
//
// class Tiger extends Animal{
//
//     constructor(name) {
//         super(name, "meat");
//     }
// }
//
// class Bear extends Animal{
//
//     constructor(name) {
//         super('name, "fish"');
//     }
//
//     sleep() {
//         console.log(this.name + " hibernates for 4 months");
//     }
// }
//
// class Shape {
//
//     constructor(name) {
//         this.name = name;
//         this.special = true;
//     }
//
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//
//     sayHistory() {
//         console.log("Shapes have a wonderful history.");
//     }
// }
//
// class Polygon extends Shape {
//
//     constructor(height, width) {
//         super('Polygon');
//         this.height = height;
//         this.width = width;
//     }
//
//     sayHistory() {
//         console.log('"Polygon" is derived from the Greek polus (many) ' +
//             'and gonia (angle).');
//     }
//
// }

//Part VII:

//Instructions:

// Today is the day! Zoe now keeps track of giraffes, bees, AND unicorns, so she needs 3 more classes of animals added to
// the program. Luckily, we're prepared because we have a general Animal class with typical animal behaviors.
//
// We're going to create 3 more subclasses of Animal: Bee, Giraffe, and Unicorn.  Each class should set their own value for
// favoriteFood, and should override the sleep or eat functions, or both as appropiate.
//
// Unicorns
//
// Implement the Unicorn class as a subclass of Animal. In case you didn't know, unicorns love to eat marshmallows and they
// sleep in clouds. In other words, their favoriteFood is "marshmallows" and calling the sleep function on a Unicorn should
// print "<name> sleeps in a cloud".
//
// Giraffes
//
// Implement the Giraffe class as a subclass of Animal. Giraffes are vegetarian, so they only eat leaves. If you feed
// "leaves" to a Giraffe, they will happily tell you "YUM!!! <name> wants more leaves" after eating them (just like how
// Tigers respond to "meat") and then sleep.
//
//     However, if you feed them anything else, they will shout "YUCK!!! <name> will not eat <food>" to let you know they
// don't like what you fed them. You'll need to override the eat function for the Giraffe class to model this behavior.
// When eating leaves, you can call the superclass's implementation of the eat function - super.eat(‘leaves’) - to avoid
// having to repeat code unnecessarily.
//
// Bees
//
// Implement the Bee class as a subclass of Animal. Bees only eat pollen. If they are fed pollen print "YUM!!! <name> wants
// more pollen" and call sleep(). If fed anything else, the bee will complain in the same way as giraffes do. Additionally,
// bees never sleep, so if you call the sleep function on the Bee class, it should print "<name> never sleeps" instead of
// the standard sleep behavior.
//
//     The “zoo” (your run function) currently has one animal of each type. There is:
//
//     A Tiger named Tigger
// A Bear named Pooh
// A Unicorn named Rarity
// A Giraffe named Gemma
// A Bee named Stinger
//
//
// This time, you'll be in charge of writing your own test code! It should output exactly this:
//
// Tigger eats meat
// YUM!!! Tigger wants more meat
// Pooh eats fish
// YUM!!! Pooh wants more fish
// Pooh eats meat
// Pooh hibernates for 4 months
// Rarity eats marshmallows
// YUM!!! Rarity wants more marshmallows
// Rarity sleeps in a cloud
// YUCK!!! Gemma will not eat meat
// Gemma eats leaves
// YUM!!! Gemma wants more leaves
// Gemma sleeps for 8 hours
// YUCK!!! Stinger will not eat ice cream
// Stinger eats pollen
// YUM!!! Stinger wants more pollen
// Stinger never sleeps

//Code:

// function run() {
//     var tigger = new Tiger("Tigger");
//     tigger.eat("meat");
//     var pooh = new Bear("Pooh");
//     pooh.eat("fish");
//     pooh.eat("meat");
//     var rarity = new Unicorn("Rarity");
//     rarity.eat("marshmallows");
//     rarity.sleep();
//     var gemma = new Giraffe("Gemma");
//     gemma.eat("meat");
//     gemma.eat("leaves");
//     gemma.sleep();
//     var stinger = new Bee("Stinger");
//     stinger.eat("ice cream");
//     stinger.eat("pollen");
//     stinger.sleep();
//
// }
//
// class Animal {
//
//     constructor(name,favoriteFood) {
//         this.name = name;
//         this.favoriteFood = favoriteFood;
//     }
//
//     sleep() {
//         console.log(this.name + " sleeps for 8 hours ");
//     }
//
//     eat(food) {
//         console.log(this.name + " eats " + food);
//         if(food == this.favoriteFood){
//             console.log("YUM! " + this.name + " wants more " + food);
//         } else {
//             this.sleep();
//         }
//     }
// }
//
// class Tiger extends Animal{
//
//     constructor(name) {
//         super(name, "meat");
//     }
// }
//
// class Bear extends Animal{
//
//     constructor(name) {
//         super(name, "fish");
//     }
//
//     sleep() {
//         console.log(this.name + " hibernates for 4 months");
//     }
// }
//
// class Unicorn extends Animal{
//
//     constructor(name) {
//         super(name, "marshmallows");
//     }
//     sleep(){
//         console.log(this.name + " sleeps on a cloud");
//     }
// }
//
// class Giraffe extends Animal{
//
//     constructor(name) {
//         super(name, "leaves");
//     }
//     eat(food){
//         if(food == this.favoriteFood) {
//             console.log(this.name + " eats " + food);
//             console.log("YUM! " + this.name + " wants more " + food);
//         } else if(food != this.favoriteFood){
//             console.log("YUCK!" + this.name + " will not eat " + food);
//         }
//     }
// }
//
// class Bee extends Animal{
//
//     constructor(name) {
//         super(name, "pollen");
//     }
//     eat(food) {
//         if (food == this.favoriteFood) {
//             console.log(this.name + " eats " + food);
//             console.log("YUM! " + this.name + " wants more " + food);
//         } else if (food != this.favoriteFood) {
//             console.log("YUCK! " + this.name + " will not eat " + food);
//         }
//     }
//     sleep(){
//         console.log(this.name + " never sleeps");
//     }
// }
//
// class Shape {
//
//     constructor(name) {
//         this.name = name;
//         this.special = true;
//     }
//
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//
//     sayHistory() {
//         console.log("Shapes have a wonderful history.");
//     }
// }
//
// class Polygon extends Shape {
//
//     constructor(height, width) {
//         super('Polygon');
//         this.height = height;
//         this.width = width;
//     }
//
//     sayHistory() {
//         console.log('"Polygon" is derived from the Greek polus (many) ' +
//             'and gonia (angle).');
//     }
//
// }

//Part VIII:

//Instructions:
// Zoe went in to pet the bees on her lunch break and nobody has seen her since! The animals haven't been fed and they're
// getting hungry!  Let's make your program more useful so that it can help any zookeeper keep track of all the animals they
// feed each day.
//
// We're ready to create a Zookeeper class that contains a constructor that sets it’s name based on a name string passed
// to it.
//
// A zookeeper needs to feed many animals each day, so let's add a feedAnimals function which takes two arguments: an
// array of animals and a string called food.
//
// This function should first log "<name> is feeding <food> to <animals.length> animals", then iterate over the array of
// animals and call each animal's eat function, passing the value of food as the argument.
//
// Finally, in your run function, create a new Zookeeper instance named “Zoebot” and call the feedAnimals function, using
// an array containing an instance of each animal, and your own favorite food.  Did it work??  You rock.


//Code:

// function run() {
//     var tigger = new Tiger("Tigger");
//     // tigger.eat("meat");
//     var pooh = new Bear("Pooh");
//     // pooh.eat("fish");
//     // pooh.eat("meat");
//     var rarity = new Unicorn("Rarity");
//     // rarity.eat("marshmallows");
//     // rarity.sleep();
//     var gemma = new Giraffe("Gemma");
//     // gemma.eat("meat");
//     // gemma.eat("leaves");
//     // gemma.sleep();
//     var stinger = new Bee("Stinger");
//     // stinger.eat("ice cream");
//     // stinger.eat("pollen");
//     // stinger.sleep();
//
//     var zoebot = new Zookeeper("Zoebot");
//     zoebot.feedAnimals([tigger, pooh, rarity, gemma, stinger], "Broccoli");
//
// }
//
// class Animal {
//
//     constructor(name,favoriteFood) {
//         this.name = name;
//         this.favoriteFood = favoriteFood;
//     }
//
//     sleep() {
//         console.log(this.name + " sleeps for 8 hours ");
//     }
//
//     eat(food) {
//         console.log(this.name + " eats " + food);
//         if(food == this.favoriteFood){
//             console.log("YUM! " + this.name + " wants more " + food);
//         } else {
//             this.sleep();
//         }
//     }
// }
//
// class Tiger extends Animal{
//
//     constructor(name) {
//         super(name, "meat");
//     }
// }
//
// class Bear extends Animal{
//
//     constructor(name) {
//         super(name, "fish");
//     }
//
//     sleep() {
//         console.log(this.name + " hibernates for 4 months");
//     }
// }
//
// class Unicorn extends Animal{
//
//     constructor(name) {
//         super(name, "marshmallows");
//     }
//     sleep(){
//         console.log(this.name + " sleeps on a cloud");
//     }
// }
//
// class Giraffe extends Animal{
//
//     constructor(name) {
//         super(name, "leaves");
//     }
//     eat(food){
//         if(food == this.favoriteFood) {
//             console.log(this.name + " eats " + food);
//             console.log("YUM! " + this.name + " wants more " + food);
//         } else if(food != this.favoriteFood){
//             console.log("YUCK!" + this.name + " will not eat " + food);
//         }
//     }
// }
//
// class Bee extends Animal{
//
//     constructor(name) {
//         super(name, "pollen");
//     }
//     eat(food) {
//         if (food == this.favoriteFood) {
//             console.log(this.name + " eats " + food);
//             console.log("YUM! " + this.name + " wants more " + food);
//         } else if (food != this.favoriteFood) {
//             console.log("YUCK! " + this.name + " will not eat " + food);
//         }
//     }
//     sleep(){
//         console.log(this.name + " never sleeps");
//     }
// }
//
// class Zookeeper{
//
//     constructor(name){
//         this.name = name;
//     }
//
//     feedAnimals(animals, food){
//         console.log(this.name + " is feeding " + food + " to " + animals.length + " animals");
//         for(var i = 0; i < animals.length; i++){
//             animals[i].eat(food);
//         }
//     }
// }

//Shape functions:

// class Shape {
//
//     constructor(name) {
//         this.name = name;
//         this.special = true;
//     }
//
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//
//     sayHistory() {
//         console.log("Shapes have a wonderful history.");
//     }
// }
//
// class Polygon extends Shape {
//
//     constructor(height, width) {
//         super('Polygon');
//         this.height = height;
//         this.width = width;
//     }
//
//     sayHistory() {
//         console.log('"Polygon" is derived from the Greek polus (many) ' +
//             'and gonia (angle).');
//     }
//
// }

//Part IX:

//Instructions:

// Part IX - Static Properties
//
// Sometimes the zookeepers are getting confused about how many animals they're feeding and how many total animals are
// at the zoo. Just yesterday, Zeb the zookeeper said to ZoeBot, "Was I supposed to feed 3 bears and 5 bees, or 3 of the
// 5 bears?" Let's help them remember.
//
//     To do this, we would like to add in a population counter in our Animal class, which keeps track of how many times
// an Animal has been instantiated. But this seems impossible, given what we know – all instance variables are unique to
// the instance of the class, which means that such a variable wouldn't be able to count across instances of a class...
//
// Enter static functions!  A static function is called on the class itself and is not a property of the instances of a
// class.  So if we want keep a tally of the animal population as we go, we can do the following:
//
// First, add a global var called animalPopulation and set it equal to 0;
//
// Next, alter your Animal constructor so that the population is incremented each time an animal is created.
//
//     class Animal {
//
//     constructor(name, foavoriteFood) {
//     ...
//         animalPopulation++;
//     }
// }
//
// Finally, add a static function to Animal that returns your population!
//
//     static getPopulation() {
//     return animalPopulation;
// }
//
// Voila!  Now try calling Animal.getPopulation() and see what you get.  Also try calling tigger.getPopulation() and see what you don’t get!
//
//     Can you explain what a static function is and why it might be useful?

//Code:

// animalPopulation = 0;
//
// function run() {
//     var tigger = new Tiger("Tigger");
//     // tigger.eat("meat");
//     var pooh = new Bear("Pooh");
//     // pooh.eat("fish");
//     // pooh.eat("meat");
//     var rarity = new Unicorn("Rarity");
//     // rarity.eat("marshmallows");
//     // rarity.sleep();
//     var gemma = new Giraffe("Gemma");
//     // gemma.eat("meat");
//     // gemma.eat("leaves");
//     // gemma.sleep();
//     var stinger = new Bee("Stinger");
//     // stinger.eat("ice cream");
//     // stinger.eat("pollen");
//     // stinger.sleep();
//
//     var zoebot = new Zookeeper("Zoebot");
//     zoebot.feedAnimals([tigger, pooh, rarity, gemma], "Broccoli");
//
//     console.log(Animal.getPopulation());
//
// }
//
// class Animal {
//
//     constructor(name,favoriteFood) {
//         this.name = name;
//         this.favoriteFood = favoriteFood;
//         animalPopulation++;
//     }
//
//     static getPopulation() {
//         return animalPopulation;
//     }
//
//
//     sleep() {
//         console.log(this.name + " sleeps for 8 hours ");
//     }
//
//     eat(food) {
//         console.log(this.name + " eats " + food);
//         if(food == this.favoriteFood){
//             console.log("YUM! " + this.name + " wants more " + food);
//         } else {
//             this.sleep();
//         }
//     }
// }
//
// class Tiger extends Animal{
//
//     constructor(name) {
//         super(name, "meat");
//     }
// }
//
// class Bear extends Animal{
//
//     constructor(name) {
//         super(name, "fish");
//     }
//
//     sleep() {
//         console.log(this.name + " hibernates for 4 months");
//     }
// }
//
// class Unicorn extends Animal{
//
//     constructor(name) {
//         super(name, "marshmallows");
//     }
//     sleep(){
//         console.log(this.name + " sleeps on a cloud");
//     }
// }
//
// class Giraffe extends Animal{
//
//     constructor(name) {
//         super(name, "leaves");
//     }
//     eat(food){
//         if(food == this.favoriteFood) {
//             console.log(this.name + " eats " + food);
//             console.log("YUM! " + this.name + " wants more " + food);
//         } else if(food != this.favoriteFood){
//             console.log("YUCK!" + this.name + " will not eat " + food);
//         }
//     }
// }
//
// class Bee extends Animal{
//
//     constructor(name) {
//         super(name, "pollen");
//     }
//     eat(food) {
//         if (food == this.favoriteFood) {
//             console.log(this.name + " eats " + food);
//             console.log("YUM! " + this.name + " wants more " + food);
//         } else if (food != this.favoriteFood) {
//             console.log("YUCK! " + this.name + " will not eat " + food);
//         }
//     }
//     sleep(){
//         console.log(this.name + " never sleeps");
//     }
// }
//
// class Zookeeper{
//
//     constructor(name){
//         this.name = name;
//     }
//
//     feedAnimals(animals, food){
//         console.log(this.name + " is feeding " + food + " to " + animals.length + " animals");
//         for(var i = 0; i < animals.length; i++){
//             animals[i].eat(food);
//         }
//     }
// }

//Part X:

//Instructions:

// Part X - Final Challenge!
//
//     Now that you know how to use static properties, let's use them to count our Animal population.
//
// Let’s implement a new feature in the Animal class!
//
//     Show the total Animal population whenever you call feedAnimals in Zookeeper.
//
//     Adjust the Zookeeper.feedAnimals function to print "<name> is feeding <food> to <number of animals feeding> of <population> total animals".
//
//     Conclusion
//
// Congratulations! In this tutorial you learned about the basic principles of Object-Oriented Programming.
//
//     Object-Oriented Programming is the basis of many complex programs. You'll be using these abstractions as core principles as you delve into many of your programming projects.
//
//
// Push your working HTML and JS files to GitHub at this point and turn in to Albinson on Classroom.  NO NEED TO PUBLISH IT TO PAGES AT THIS TIME.
//
//     Just turn in the repository link on classroom.

//Code:

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