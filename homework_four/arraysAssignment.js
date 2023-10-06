const students = [
  { name: "Alice", grades: [85, 92, 78, 90] },

  { name: "Bob", grades: [75, 88, 95, 100] },

  { name: "Charlie", grades: [60, 72, 68, 74] },

  { name: "David", grades: [92, 88, 95, 98] },

  { name: "Eve", grades: [100, 100, 100, 100] },
];

//foreach
const studentNames = [];

students.forEach((student) => {
  studentNames.push(student.name);
});

document.getElementsByClassName("sList")[0].innerHTML += studentNames;

//every method

const gradeCheck = students.every(function (student) {
  return student.grades.every(function (grade) {
    return grade >= 60;
  });
});

document.getElementsByTagName("p")[1].innerHTML += gradeCheck;

//some method

const someCheck = students.some(function (student) {
  return student.grades.some(function (grade) {
    return (grade = 100);
  });
});

document.getElementsByTagName("p")[2].innerHTML += someCheck;

//filter
//run two methods
// 1. Go through each student
// 2.For each student:
//   - add up all the grades and divide by the total number of grades
// - Take that answer, and see if it’s greater than 90

const averageStudent = students.filter(function (student) {
  const averageGrade =
    student.grades.reduce((avg, grade) => avg + grade) / student.grades.length;

  return averageGrade >= 90;
});

const studentName = averageStudent.map(function (student) {
  return student.name;
});
document.getElementsByClassName("sList")[1].innerHTML += studentName;

//map
const studentSummaries = students.map((student) => {
  const avgGrade =
    student.grades.reduce((total, grade) => total + grade, 0) /
    student.grades.length;
  return `Name: ${student.name}, Average Grade: ${avgGrade}`;
});

document.getElementById("studentAvgs").innerHTML = studentSummaries;
//reduce
const studentGrades = students.reduce((total, student) => {
  return total + student.grades.length;
}, 0);

document.getElementsByTagName("p")[5].innerHTML += studentGrades;
