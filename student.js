class StudentSystem {
  // property
  students = {
    1: { id: 1, name: "Sonu", marks: [18,15,10] },
    2: { id: 2, name: "Rahul", marks: [60, 70, 65] },
    3: { id: 3, name: "Anu", marks: [90, 88, 95] },
    4: { id: 4, name: "Meera", marks: [50, 55, 60] },
  };


  // methods to implement:

  // 1. validateStudent(id)
  // → check if student exists

  toValidate(stdId) {
    return Object.hasOwn(this.students, stdId);
  }

  // 2. addMarks(id, newMark)
  // → add a new mark to student's marks array
  addMark(stdId, newMark) {
    if (typeof newMark !== "number" || newMark < 0 || newMark > 100) {
      return "invalid entry";
    }

    if (this.toValidate(stdId)) {
      let student = this.students[stdId];
      student["marks"].push(newMark);
      return this.students[stdId];
    } else {
      return "Student not Found";
    }
  }

  // 3. getAverage(id)
  // → return average marks

  getAverage(stdId) {
    if (this.toValidate(stdId)) {
      let student = this.students[stdId];
      if (student["marks"].length === 0) {
        return "no mark available";
      }

      let total = student["marks"].reduce((accu, curr) => accu + curr, 0);

      return total / student["marks"].length;
    } else {
      return "student not found";
    }
  }

  // 4. getGrade(id)
  // → return grade based on average
  //    (90+ → A, 75+ → B, 60+ → C, else D)

  getgrade(stdId) {
   
    if(this.toValidate(stdId)){

      let average = this.getAverage(stdId);


      if(typeof average !== "number"){
        return "no mark available"
      } 

      if(average>=90){
        return `A Grade ${average}`;
      }else if (average>=75){
        return `B Grade ${average}` 
      }else if (average>=60){
        return `C Grade ${average}` 
      } else{
        return `D Grade ${average}`
      }
    }else {
      return "Student not Found"
    }

  }

  // 5. getTopper()
  // → return student with highest average


 getTopper(){

  let studentsArr = Object.values(this.students);

  let highScore = 0;
  let topper = null;

  for(let student of studentsArr){
    let avg = Number(this.getAverage(student.id))

    if(avg>highScore){
      highScore = avg;
      topper = student;
    }

  }
  return topper?topper:"no topper found"

 }

  

  // 6. getFailedStudents()
  // → return students with average < 60
}

let studentObj = new StudentSystem();

// let isValid = studentObj.toValidate(4 );
// isValid?console.log("student is present"):console.log("not present");

// let addMark = studentObj.addMark(1,-111);
// console.log(addMark);

// let averageMarks = studentObj.getAverage(1);
// console.log(averageMarks);

// let getGrade = studentObj.getgrade(1);
// console.log(getGrade);

let getTopper = studentObj.getTopper();

console.log(getTopper);
