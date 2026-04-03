class StudentSystem {
  // property
  students = {
    1: { id: 1, name: "Sonu", marks: [80, 75, 90] },
    2: { id: 2, name: "Rahul", marks: [60, 70, 65] },
    3: { id: 3, name: "Anu", marks: [90, 88, 95] },
    4: { id: 4, name: "Meera", marks: [50, 55, 60] },
  };

  // methods to implement:

  // 1. validateStudent(id)
  // → check if student exists

  toValidate(stdId){
    return Object.hasOwn(this.students,stdId);
  }

  // 2. addMarks(id, newMark)
  // → add a new mark to student's marks array
  addMark(stdId,newMark){

    if(typeof newMark !== "number" || newMark<0 || newMark>100){
      return "invalid entry";
    }

    if(this.toValidate(stdId)){
      let student = this.students[stdId];
      student['marks'].push(newMark);
      return this.students[stdId];

    }else{
      return "Student not Found"
    }
  }



  // 3. getAverage(id)
  // → return average marks

  // 4. getGrade(id)
  // → return grade based on average
  //    (90+ → A, 75+ → B, 60+ → C, else D)

  // 5. getTopper()
  // → return student with highest average

  // 6. getFailedStudents()
  // → return students with average < 60
}

let studentObj = new StudentSystem();

// let isValid = studentObj.toValidate(4 );
// isValid?console.log("student is present"):console.log("not present");

let addMark = studentObj.addMark(1,-111);
console.log(addMark);



