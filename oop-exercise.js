/* Please read the instructions located in the exercises/2-oop-exercise-readme.md file and complete your code below */
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.grades = [];
  }
  addGrade(grade, ...rest) {
    if (grade > 0 && grade < 100) {
      this.grades.push(grade);
    } else if (rest > 0 && rest < 100) {
      this.grades.push(...rest);
    } else {
      console.log("Grade must be between 0 and 100");
    }
  }
  calculateAverageGrade() {
    if (this.grades !== undefined) {
      averageGrade = this.grades.reduce(
        (acc, val) => (acc + val) / this.grades.length
      );
    } else {
      return 0;
    }
  }
  hasPassed(passingGrade) {
    return averageGrade > passingGrade;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}

const student1 = new Student("Alex", 25);
student1.addGrade(80, 90, 70, 65, 89);
console.log(student1);

class Course {
  constructor() {}
}
