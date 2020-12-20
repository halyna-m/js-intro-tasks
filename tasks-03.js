// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

function circleCircumference(circle) {
  const circumference = circle.radius * 2 * Math.PI;
  return circumference;
}

// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

class Shark extends Animal {
  constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 0;
    this.species = "shark";
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 4;
    this.species = "cat";
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super();
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 4;
    this.species = "dog";
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
