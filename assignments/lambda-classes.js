// CODE here for your Lambda Classes

class Person {
  constructor(stuff) {
    this.name = stuff.name;
    this.age = stuff.age;
    this.location = stuff.location;
    this.gender = stuff.gender;
  }
  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
  }
} // Person.

class Instructor extends Person {
  constructor(stuff) {
    super(stuff);
    this.specialty = stuff.specialty;
    this.favLanguage = stuff.favLanguage;
    this.catchPhrase = stuff.catchPhrase;
  }
  demo(subject) {
    console.log(`Today, we are learning about ${subject}.`);
  }
  grade(student,subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }
} // Instructor

class ProjectManager extends Instructor {
  constructor(stuff) {
    super(stuff);
    this.gradClassName = stuff.gradClassName;
    this.favInstructor = stuff.favInstructor;
  }
  standUp(slack) {
    console.log(`${this.name} announces to #${slack}: \"@channel Standy times!\"`)
  }
  debugCode(student,subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
  }
} // Project Manager

class Student extends Person {
  constructor(stuff) {
    super(stuff);
    this.previousBackground = stuff.previousBackground;
    this.className = stuff.className;
    this.favSubjects = stuff.favSubjects;
  }
  listSubjects() {
    if (typeof this.favSubjects === "string") {
      // This if-branch handles if favSubjects is just a string.
      console.log(`Favorite subject? I like ${this.favSubjects}!`)
    } else if (typeof this.favSubjects === "object") {
      // This elif responds to array versions of favSubjects.
        if (this.favSubjects.length === 1) {
          // Here begins an if inside an else-if.
          console.log(`Favorite subject? I like ${this.favSubjects[0]}!`)
       } else if (this.favSubjects.length > 1) {
      // Use a total-slice to copy out the entire string without creating a referent.
      let tempSubjectList = this.favSubjects.slice();
      // pop breaks it up into the list and the "and" catch.
      let listSubjectsAnd = tempSubjectList.pop();
      // .join(', ') will not create an Oxford comma but WILL convert to String.
      console.log(`Oh, my favorite subjects? I like ${tempSubjectList.join(', ')}, and ${listSubjectsAnd}.`)
    } else {
      console.log("Favorite subject? I don't really have one.")
    } // end of the "listSubjects finds an array" branch.
    } // end of the outer if-else
  } // listSubjects()
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`)
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun a Sprint Challenge for ${subject}.`)
  }
} // Student

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'RockScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const barney = new ProjectManager({
  name: 'Barney',
  location: 'Bedrock',
  age: 32,
  gender: 'male',
  favLanguage: 'Jokes',
  specialty: 'Back-end',
  catchPhrase: `Hey Fred!`
});

const pebbles = new Student({
  name: 'Pebbles',
  location: 'Bedrock',
  age: 3,
  gender: 'female',
  previousBackground: 'baby',
  className: 'RockDev 101',
  favSubjects: 'Meteor'
});

const bambam = new Student({
  name: 'Bamm-Bamm',
  location: 'Bedrock',
  age: 4,
  gender: 'male',
  previousBackground: 'adopted',
  className: 'RockDev 101',
  favSubjects: ['Meteor','RockScript','Weight Lifting']
});

fred.speak();
fred.demo('RockScript');
pebbles.listSubjects();
pebbles.PRAssignment('RockScript');
pebbles.sprintChallenge('RockScript');
fred.grade(pebbles,'RockScript');
bambam.listSubjects();
// Had to debug my code a little to make sure using ListSubjects twice worked.
// Caused the change to .slice()
bambam.listSubjects();
barney.debugCode(bambam,'MeteoreacuteangleJS');
barney.standUp('PM-Barney');


// STRETCH:
// Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
// Add a graduate method to a student.
// This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
// If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.
