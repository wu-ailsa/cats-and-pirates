//-----------------------------------------------------
//  "Don't panic" - Hitchhiker's Guide to the Galaxy
//-----------------------------------------------------


// ### For the Cat class:
// 1. Give the class at least three properties.
// 2. Give the class at least three methods.
// 3. Create two instances of the class (two cats).
// 4. Log both instances to see their properties.
// 5. Invoke each method from both instances.

// Cat Class 
class Cat {
    constructor(personality, color, age) {
        this.personality = personality;
        this.color = color;
        this.age = age;
        console.log('"Hello every nyan, how are you? I am fine, thank you."');
    }
    eat(food){
        console.log(`This cat is eating ${food}.`);
    }
    meow(musicSymbol){
        console.log(`You hear a cat meowing in ${musicSymbol}.`);
    }
    scratch(furniture){
        console.log(`Cat scratches detected at the ${furniture}.`);
    }
}
// Cat Instances 
const Cheddar = new Cat("affectionate","orange",2);
const Dream = new Cat("mysterious","black and white",1000000000);

console.log(Cheddar);
console.log(Dream);

Cheddar.eat("freshly caught salmon");
Dream.meow("piano");


//---------------------------------------------------------------


// ### For the Pirate class:
// 1. Create three properties that are set by the constructor.
// 2. Create three methods.
// 3. Instantiate two arrays of three pirates, name the arrays after your favorite pirate ships: jollyRoger and blackPearl.
// 4. Loop over each array and print three properties of each pirate.

// Pirate Class
class Pirate {
    constructor(pirateName, parrotName, pirateFitColor, level) {
        this.pirateName = pirateName;
        this.parrotName = parrotName;
        this.pirateFitColor = pirateFitColor; 
        this.level = level;
        console.log('"Ahoy, world!"');
    }
    plunder(shipsPlundered){
        console.log(`This pirate has plundered ${shipsPlundered} ships.`);
    }
    listen(song){
        console.log(`Pirate is listening to ${song}.`);
    }
    explore(place){
        console.log(`Today, this little pirate is exploring ${place}.`);
    }
}

// Instantiate two arrays of three pirates each
const jollyRoger = [new Pirate("Binky","Macaw","Green", 10), new Pirate("Jolly","Peanut", "Yellow", 7), new Pirate("Vera Brave","Cesar", "Green", 9)];
const blackPearl = [new Pirate("Seadog","Minnie", "Pink", 12), new Pirate("Puffypants","Sparkle", "Purple", 6), new Pirate("Patty Price","Pinky", "Orange", 11)];

///// Loop over each array and print three properties of each pirate. /////
// Loop over the jollyRoger array and print three properties of each pirate.
console.log("Properties of the Jolly Roger's Crew:");
for (const pirate of jollyRoger) {
    console.log(`Name: ${pirate.pirateName}`);
    console.log(`Level: ${pirate.level}`);
    console.log(`Parrot Name: ${pirate.parrotName}`);
    console.log(`Pirate Fit Color: ${pirate.pirateFitColor}`);
    console.log("----------------------");
}

// Loop over the blackPearlCrew array and print three properties of each pirate.
console.log("Properties of the Black Pearl's Crew:");
for (const pirate of blackPearl) {
    console.log(`Name: ${pirate.pirateName}`);
    console.log(`Level: ${pirate.level}`);
    console.log(`Parrot Name: ${pirate.parrotName}`);
    console.log(`Pirate Fit Color: ${pirate.pirateFitColor}`);
    console.log("----------------------");
}
