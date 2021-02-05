class Cat {
	constructor (name, color) {
		this.name = name;
		this.color = color;
	}

	makeSound() {
		console.log("Meow");
	}

	eat(food) {
		console.log(`Eating ${food}...`);
	}

	walk() {
		console.log("Walking...");
	}
}

const pedro = new Cat("Pedro", "black");

pedro.makeSound();

pedro.eat("beef");

pedro.walk();