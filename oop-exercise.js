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

// everything checks out. 7/8/25 1:47pm

class Course extends Student {
  constructor(title) {
    super(name, age);
    this.title = title;
    this.students = [];
  }

  enrollStudent(Student) {
    this.students.push(Student);
  }

  listStudents() {
    console.log(this.students);
  }

  calculcateCourseAverage() {
    if (this.students.length === 0) return 0;
    for (peer of students) {
      this.calculateAverageGrade();
      let courseSum = peer.averageGrade.reduce((acc, val) => acc + val, 0);
      let courseAverage = courseSum / this.students.length;
    }
  }
}

const course1 = new Course("Devslopes");
console.log(student1);
enrollStudent(student1);
