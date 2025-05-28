console.log("JavaScript Loops");
let tasks = [];
let counter = 0;
while (true) {
  let input = prompt(
    "Include the Tasks on your to Do List Here. Type 'done' when you're done adding tasks."
  );

  if (input.toLowerCase().trim() === "done") {
    console.log("Your To Do List for Today:");
    tasks.forEach(function (task) {
      counter++;
      console.log(`${counter}. ${task}`);
    });
    break;
  }
  tasks.push(input);
}
