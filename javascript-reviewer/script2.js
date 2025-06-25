console.log("Array Practice");
//Level 1
const movies = ["Butterfly Effect", "Equlibrium", "StarWars"];
movies.shift("Transformers");
// movies.unshift();
console.log(movies);

const lastWatched = movies.pop();
console.log(lastWatched);
movies.push("Yes Man");
movies.push("Forrest Gump");
movies.push("Rush Hour");
movies.push("Avatar");

//for loop
for (let i = 0; i < movies.length; i++) {
  let movie = movies[i];
  console.log(`Movie: ${movie}`);
}

//for...of
for (let movie of movies) {
  console.log(movie);
}
//Level2
const nums = [1, 5, 10, 15];
const doubled = nums.map((num) => num * 2);
console.log(doubled);

const greaterThanTen = nums.filter((num) => num >= 10);
console.log(greaterThanTen);

const divisibleByFive = nums.find((num) => num % 5 === 0);
console.log(divisibleByFive);

//Level 3
const tasks = ["Read", "Code", "Workout"];
const tasksObj = tasks.map((task) => {
  return { title: task, completed: false };
});

console.log(tasksObj);

// const countChar = tasks.reduce();

const cart = [
  { name: "Shoes", price: 50 },
  { name: "Hat", price: 20 },
  { name: "Jacket", price: 100 },
];

const totalCost = cart.reduce((num, cost) => {
  return (num += cost.price);
}, 0);

console.log(totalCost);

const cart2 = [
  {
    name: "Protein Bar",
    price: 5,
  },
  { name: "Pre Workout", price: 25 },
  { name: "Creatine", price: 15 },
];

const cartCalc = cart2.reduce((num, cost) => {
  return (num += cost.price);
}, 0);

console.log(`$${cartCalc.toFixed(2)}`);

const numbers = nums.map((num) => num * 2);
console.log(numbers);

const words = ["the", "banana", "at", "window"];

const filteredWords = words.filter((long) => {
  return long.length >= 4;
});

console.log(filteredWords);

const nbrs = [1, 4, 6, 7, 10, 13];

const evenNumbers = nbrs.reduce((acc, numbers) => {
  if (numbers % 2 === 0) {
    acc++;
  }
  return acc;
}, 0);

console.log(evenNumbers);

const wordss = ["strength", "gym", "banana", "code", "deadlift", "HIIT"];

const fiveLetters = wordss.reduce((acc, word) => {
  if (word.length >= 5) {
    acc++;
  }
  return acc;
}, 0);

console.log(fiveLetters);

const people2 = [
  { name: "Zo", age: 29 },
  { name: "Ryu", age: 34 },
  { name: "Lex", age: 22 },
  { name: "Aria", age: 30 },
  { name: "Max", age: 29 },
  { name: "Kai", age: 22 },
];
// Expected output
// {
//   22: 2,
//   29: 2,
//   30: 1,
//   34: 1
// }

const output = people2.reduce(
  (acc, person) => {
    if (person.age == 22) {
      acc[22] += 1;
    } else if (person.age == 29) {
      acc[29] += 1;
    } else if (person.age == 30) {
      acc[30] += 1;
    } else if (person.age == 34) {
      acc[34] += 1;
    }
    return acc;
  },
  {
    22: 0,
    29: 0,
    30: 0,
    34: 0,
  }
);

// console.log(output);

// const output2 = people.reduce((acc, person) => {
//   acc[person.age] = (acc[person.age] || 0) + 1;
//   return acc;
// }, {});

const people = [
  { name: "Zo", age: 29 },
  { name: "Ryu", age: 34 },
  { name: "Lex", age: 22 },
  { name: "Aria", age: 30 },
];

const result = people.reduce(
  (acc, person) => {
    acc.totalAge += person.age;
    if (person.age > acc.oldest.age) {
      acc.oldest = person;
    }
    return acc;
  },
  { totalAge: 0, oldest: { name: "", age: 0 } }
);

console.log(result);
// { totalAge: 115, oldest: { name: "Ryu", age: 34 } }

const people3 = [
  { name: "Zo", age: 29 },
  { name: "Ryu", age: 34 },
  { name: "Lex", age: 22 },
  { name: "Aria", age: 30 },
  { name: "Max", age: 29 },
  { name: "Kai", age: 22 },
];

// const output3 = people3.reduce((acc, person) => {
//   if (!acc[person.age]) {
//     acc[person.age] = [];
//   }
//   acc[person.age].push(person.name);

//   return acc;
// }, {});

// console.log(output3);

const output4 = people3.reduce((acc, person) => {
  if (!acc[person.age]) {
    acc[person.age] = [];
  }
  acc[person.age].push(person);
  return acc;
}, {});

console.log(output4);

const users = [
  { name: "Zo", score: 88, active: true },
  { name: "Lex", score: 52, active: false },
  { name: "Ryu", score: 91, active: true },
  { name: "Aria", score: 77, active: true },
  { name: "Kai", score: 69, active: false },
  { name: "Max", score: 95, active: true },
];

const output5 = users
  .filter((user) => {
    return user.active == true;
  })
  .sort((a, b) => {
    return b.score - a.score;
  })
  .map((person) => {
    return {
      name: person.name,
      score: person.score,
    };
  });

//
// console.log(output5);

const output6 = users
  .filter((user) => {
    return user.active && user.score >= 80;
  })
  .sort((a, b) => {
    return a.name.localeCompare(b.name);
  })
  .map((user) => {
    return {
      name: user.name,
      score: user.score,
    };
  });

console.log(output6);

const threeNames = (name1, name2, name3) =>
  console.log(`Hello ${name1}, ${name2}, and ${name3}!`);
threeNames("Zo", "Nath", "Luke");

const products = [
  { product: "Mang Tomas", price: 60, stock: 0 },
  { product: "Banana Ketchup", price: 50, stock: 3 },
  { product: "Toasted Garlic", price: 95, stock: 5 },
  { product: "Toasted Onion", price: 120, stock: 0 },
  { product: "Garlic Parmesian", price: 140, stock: 2 },
];

const sortedItems = products
  .sort((a, b) => {
    return b.price - a.price;
  })
  .filter((item) => {
    return item.stock > 0;
  })
  .map((display) => {
    return { product: `$ ${display.price}` };
  });

console.log(sortedItems);

const user = { name: "Zo", age: 29, location: { city: "LA", country: "USA" } };
console.log(`${user.name} lives in ${user.location.city}.`);

const oldState = { score: 42, active: true };

const newState = { ...oldState, level: 3 };
console.log(newState);
console.log(oldState);

let numberCount = document.getElementById("numberCounter");
let currentNumber = 0;
// let addButton = document.getElementById("ButtonCounter");

ButtonCounter.addEventListener("click", function () {
  currentNumber = currentNumber + 1;
  numberCount.textContent = currentNumber;
});
