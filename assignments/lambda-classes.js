// CODE here for your Lambda Classes

class Person {
  constructor() {
  }
}

class Instructor extends Person {
  constructor() {
    super(Person)
  }
}

class ProjectManager extends Instructor {
  constructor() {
    super(Instructor)
  }
}

class Student extends Person {
  constructor() {
    super(Person)
  }
}

// Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// Now that our students have a









grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
// Add a graduate method to a student.
// This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
// If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.
