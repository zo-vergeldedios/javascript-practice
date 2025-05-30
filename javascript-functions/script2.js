let grade1 = prompt("What is your First grade?");
let grade2 = prompt("What is your Second grade?");
let grade3 = prompt("What is your Third grade?");

function averageGrade(averageGrade) {
  return (averageGrade =
    (parseFloat(grade1) + parseFloat(grade2) + parseFloat(grade3)) / 3);
}

let averageScore = averageGrade();

const gradeConverter = () => {
  if (averageScore >= 90) {
    return "A";
  } else if (averageScore >= 80) {
    return "B";
  } else if (averageScore >= 72) {
    return "C";
  } else if (averageScore >= 66) {
    return "D";
  } else {
    return "F";
  }
};

console.log(
  `Your Score is ${averageScore}, which is equivalent to ${gradeConverter()}`
);
