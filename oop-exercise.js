/* Please read the instructions located in the exercises/2-oop-exercise-readme.md file and complete your code below */
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.grades = [];
  }
  addGrade(...grades) {
    for (let grade of grades) {
      if (grade > 0 && grade < 100) {
        this.grades.push(grade);
      } else {
        console.log("Grade must be between 0 and 100");
      }
    }
  }

  calculateAverageGrade() {
    if (this.grades.length === 0) return 0;
    let gradeSum = this.grades.reduce((acc, val) => acc + val, 0);
    let averageGrade = gradeSum / this.grades.length;
    return averageGrade;
  }

  hasPassed(passingGrade) {
    return this.calculateAverageGrade() > passingGrade;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
}

const student1 = new Student("Alex", 25);
student1.addGrade(98, 95, 80, 92, 89);
console.log(student1);
console.log(student1.calculateAverageGrade());
console.log(student1.hasPassed(80));
console.log(student1.getName());
console.log(student1.getAge());

// Everything checks out. 7/8/25 1:47pm

class Course {
  constructor(title) {
    this.title = title;
    this.students = [];
  }

  enrollStudent(student) {
    this.students.push(student);
  }

  listStudents() {
    console.log(this.students);
  }

  calculcateCourseAverage() {
    if (this.students.length === 0) return 0;
    let sum = 0;
    for (let student of this.students) {
      sum += student.calculateAverageGrade();
    }
    return sum / this.students.length;
  }
}

const course1 = new Course("Devslopes");
course1.enrollStudent(student1);
console.log(course1);
const student2 = new Student("Eddie", 21);
student2.addGrade(99, 100, 94, 96);
course1.enrollStudent(student2);
course1.listStudents();
student2.calculateAverageGrade();
console.log(course1.calculcateCourseAverage());

// Everything here checks out also 7/9/25 12:55pm
