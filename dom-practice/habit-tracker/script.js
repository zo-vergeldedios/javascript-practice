console.log("Habit Tracker");

const habitInput = document.getElementById("habitInput");
const addHabitBtn = document.getElementById("addHabitBtn");
const warning = document.getElementById("warning");
const habitCount = document.getElementById("habitCount");
const habitList = document.getElementById("habitList");

//Needed to make the button function the right way.
addHabitBtn.addEventListener("click", addHabit);
addHabitBtn.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addHabit();
  }
});

habitInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addHabit();
  }
});

function addHabit() {
  const habitText = habitInput.value.trim();

  if (habitText === "") {
    warning.textContent = "Please input a habit";
    return;
  } else {
    warning.textContent = "";
  }
  //used to create a new list for the new habit
  const habit = document.createElement("li");
  habit.textContent = habitText;
  habit.classList.add("habit");

  habit.addEventListener("click", function () {
    // habit.classList.toggle("checked");
    habit.classList.remove("habit");
  });

  const count = habitList.getElementsByTagName("li").length + 1;

  habitList.appendChild(habit);
  habitInput.value = "";

  habit.addEventListener("dblclick", function () {
    habitList.removeChild(habit);
    const count = habitList.getElementsByTagName("li").length;
    habitCount.textContent = count;
  });

  habitCount.textContent = count;
}
