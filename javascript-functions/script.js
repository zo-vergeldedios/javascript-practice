console.log("JavaScript Functions - Grade Calculator");
let scores = [];
let totalScore = 0;
let averageScore = 0;

const gradeGetter = () => {
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

while (true) {
  let scoreGetter = prompt(
    "What are your 3 test scores? Type done when you're done adding scores."
  );
  if (scoreGetter.toLowerCase().trim() === "done") {
    for (let i = 0; i < scores.length; i++) {
      totalScore += Number(scores[i]);
    }
    averageScore = totalScore / scores.length;
    // console.log(averageScore);
    console.log(
      `Your average Score is ${averageScore} which is equivalent to ${gradeGetter(
        averageScore
      )}`
    );

    break;
  }
  scores.push(scoreGetter);
}
