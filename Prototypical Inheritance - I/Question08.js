export function Question8(){
//Question-08

// 1. Define Animal constructor function
function Animal() {
    this.type = "Animal";
}

// 2. Add sound method to Animal.prototype
Animal.prototype.sound = function() {
    console.log("Animal sound");
};

// 3. Define Dog constructor function
function Dog() {
    Animal.call(this)
    this.breed = "Unknown"; 
    
}

//4. Ensure that Dog.prototype inherits from Animal.prototype.
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;



// 5. Override the sound method in Dog.prototype
Dog.prototype.sound = function() {
    console.log("Bark");
};

// 6. Create an instance of Dog
const myDog = new Dog();

// 7. Call the sound method

myDog.sound(); 



console.log(myDog.type); 
console.log(myDog.breed); 
console.log(myDog instanceof Dog); 
console.log(myDog instanceof Animal); 

}