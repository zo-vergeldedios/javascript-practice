console.log("Student Managment System");
let students = [];

//Add Students
function addStudents(name, grade) {
  students.push({ name, grade });
}

//Remove Student
function removeStudent(n) {
  const index = students.findIndex((s) => s.name === n);
  if (index !== -1) {
    students.splice(index, 1);
  }
}

//Filter Students
function filterStudents(g) {
  let filteredStudents = students.filter(function (g) {
    return g.grade >= 80;
  });

  let name = filteredStudents.map((s) => {
    console.log(`${s.name} recieved a score of 80 and above`);
  });
}

//Map Students to Create a Formatted list

const gradeConverter = (grade) => {
  if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 72) {
    return "C";
  } else if (grade >= 66) {
    return "D";
  } else {
    return "F";
  }
};

function mapStudents(student) {
  students.map((student) => {
    console.log(
      `${student.name} recieved ${
        student.grade
      } which is equivalent to ${gradeConverter(student.grade)}`
    );
  });
}

addStudents("Zo", 88);
addStudents("Nath", 92);
addStudents("Obi", 72);
addStudents("Luke", 82);
addStudents("Anakin", 78);
addStudents("Kenobi", 78);

//Executing Remove Student Function
removeStudent("Luke");

//Executing Filter Students Function
console.log("Filtering Students");
filterStudents();

//Executing map students - a Formatted list of their grades and its equivalent
console.log("Formatted List");
mapStudents();

console.log(students);
