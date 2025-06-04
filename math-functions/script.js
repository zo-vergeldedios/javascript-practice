console.log("Math Functions");
console.log("Dice Roller");

let diceCounter = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};

function randomDiceRoller() {
  const min = 1;
  const max = 6;
  let diceRoller = Math.floor(Math.random() * (max - min + 1) + 1);
  diceCounter[diceRoller]++;
  return console.log(`🎲 You rolled ${diceRoller}`);
}

const displayScores = () => {
  for (const key in diceCounter) {
    console.log(`Rolled ${key} ${diceCounter[key]} times 🎲`);
  }
};

for (let i = 0; i < 100; i++) {
  randomDiceRoller();
}

// console.log(randomDiceNum());
// console.log(diceCounter);
displayScores();
