for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

let count = 0;
while (count < 3) {
  console.log("Count:", count);
  count++;
}

let number = 5;
while (number >= 0) {
  console.log(number);
  number--;
}

let doValue = 0;
do {
  console.log("Value:", doValue);
  doValue++;
} while (doValue < 3);

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  if (i === 8) {
    break;
  }
  console.log(i);
}

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

function sum2(a, b) {
  return a + b;
}

console.log(sum2(3, 5));

function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 6));

function sayHello(name) {
  console.log(`Hello, ${name}`);
}

sayHello("Timofey");

function printInfo(name, age) {
  console.log(`Name: ${name}, Age: ${age}`);
}

printInfo("Anna", 21);

function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet();
greet("Anastasia");

function calculateDiscount(price, discount = 10) {
  return price - (price * discount) / 100;
}

console.log(calculateDiscount(1000));
console.log(calculateDiscount(1000, 20));

const add = function (a, b) {
  return a + b;
};

console.log(add(2, 3));

function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

function sumFunc(a, b) {
  return a + b;
}

const sumFunc2 = (a, b) => a + b;

const double = x => x * 2;
const sumFunc3 = (a, b) => a + b;
const sayGreeting = () => console.log("Hello");
const square = x => x * x;
const calculate = (a, b) => {
  let result = a + b;
  return result * 2;
};

console.log(sumFunc(1, 2));
console.log(sumFunc2(1, 2));
console.log(double(5));
console.log(square(4));
console.log(calculate(3, 4));

let numbersArr = [1, 2, 3, 4, 5];
console.log(numbersArr);

console.log(numbersArr[0]);
console.log(numbersArr[1]);

let colors = ["red", "green", "blue"];
console.log(colors[0]);
console.log(colors[colors.length - 1]);
colors[1] = "yellow";
console.log(colors);

console.log(numbersArr.length);

numbersArr.push(10);
console.log(numbersArr);

numbersArr.pop();
console.log(numbersArr);

let students = [];
students.push("Ivan");
students.push("Maria");
students.push("Sergey");
students.pop();
console.log(students);

let numbers2 = [10, 20, 30];
for (let i = 0; i < numbers2.length; i++) {
  console.log(numbers2[i]);
}

for (let value of numbers2) {
  console.log(value);
}

let mixedArray = [1, "text", true, 3.14];
console.log(mixedArray);

console.log(numbersArr.includes(1));
console.log(numbersArr.indexOf(2));

let fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("apple"));
console.log(fruits.includes("mango"));

let cities = ["Moscow", "Saint Petersburg", "Kazan", "Novosibirsk"];
let searchCity = "Kazan";
if (cities.includes(searchCity)) {
  console.log(cities.indexOf(searchCity));
}

let user2 = {
  name: "Ivan",
  age: 20,
  isStudent: true,
};

console.log(user2);

console.log(user2.name);
console.log(user2.age);

console.log(user2["name"]);

let book = {
  title: "JavaScript basics",
  author: "John Doe",
  year: 2020,
};

console.log(book.title);
console.log(book.author);
console.log(book.year);
book.year = 2023;
console.log(book.year);

user2.age = 30;
user2.name = "Kirill";
delete user2.isStudent;
console.log(user2);

let car = {
  brand: "Toyota",
  year: 2022,
  getInfo: function () {
    console.log(`Brand: ${car.brand}, Year: ${car.year}`);
  },
};

car.getInfo();

let product = {
  name: "Laptop",
  price: 50000,
  inStock: true,
};

for (let key in product) {
  console.log(key + ": " + product[key]);
}

let student = {
  name: "Gregory",
  skills: ["HTML", "CSS", "JS"],
  address: {
    city: "Volgograd",
    street: "Pushkina",
  },
};

console.log(student.skills[0]);
console.log(student.address.city);
