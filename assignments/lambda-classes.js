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
