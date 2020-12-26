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
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

const giveMeFive = (object) => {
  const result = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      if (key.length === 5) result.push(key);
      if (object[key].length === 5) result.push(object[key]);
    }
  }
  return result;
};

// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

function buildFun(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result[i] = function () {
      return i;
    };
  }
  return result;
}
