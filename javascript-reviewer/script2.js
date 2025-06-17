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
