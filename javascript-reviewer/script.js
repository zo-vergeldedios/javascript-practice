console.log("JavaScript Practice and Review");

//DRILLS
console.log("Basic Declaration and Calling");
function greetUser(name) {
  console.log(`Welcome ${name}`);
}
greetUser("Zo");

console.log("Parameters Vs Arguments");
const getArea = function (width, height) {
  return width * height;
};
console.log(getArea(25, 10));

console.log("Return vs Console.log");
const farenheightToCelsius = (f) => Number((((f - 32) * 5) / 9).toFixed(2));
console.log(farenheightToCelsius(277));

console.log("Default Parameters");
function createUserProfile(name, role = "member") {
  console.log(`Created a profile for ${name} as a ${role}`);
}

createUserProfile("Zo", "president");
createUserProfile("Nath");

console.log("Function Expressions and Arrow functions");
const getAreaArrowFunc = (height, width) => height * width;

console.log(getAreaArrowFunc(33, 43));

console.log("Scope - Local vs Global");
let y = 14;
let x = 12;
function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(y, x));

function multiply2(num2) {
  let x = 12;
  return x * num2;
}

console.log(multiply2(14));

console.log("Functions inside a functions");

function discount(price) {
  let discountedPrice = price * 0.9;
  return discountedPrice;
}

function finalPrice(price) {
  return discount(price);
}

console.log(finalPrice(100));

console.log("CallBack Functions");

const run = () => {
  return console.log("Run Forest");
};

function runTwice(callback) {
  callback();
  callback();
}

runTwice(run);
