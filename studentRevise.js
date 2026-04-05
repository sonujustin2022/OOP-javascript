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

 toValidate(stdId){
    return Object.hasOwn(this.students,stdId);
 }

  // 2. addMarks(id, newMark)
  // → add a new mark to student's marks array
 
toAddMark(stdId,newMark){
    if(this.toValidate(stdId)){

        if(isNaN(newMark) || newMark<0){
            return "inavlid mark"
        }

        let student = this.students[stdId]
         student.marks.push(newMark);  
        return student.marks;
       

    }else{
        return "no Student found"
    }
}

  // 3. getAverage(id)
 
  // 4. getGrade(id)
  // → return grade based on average
  //    (90+ → A, 75+ → B, 60+ → C, else D)



  // 5. getTopper()
  // → return student with highest average

  // 6. getFailedStudents()
  // → return students with average < 60
}


let studentObj = new StudentSystem();

// let toValidate = studentObj.tovalidate(5);
// toValidate?console.log("student found"):console.log("no student found")

let toAddMark = studentObj.toAddMark(4,101);
console.log(toAddMark);
