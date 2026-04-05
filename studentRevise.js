class StudentSystem {
  // property
  students = {
    1: { id: 1, name: "Sonu", marks: [45,56,89] },
    2: { id: 2, name: "Rahul", marks:  [23, 15, 30] },
    3: { id: 3, name: "Anu", marks: [92, 95, 89]},
    4: { id: 4, name: "Meera", marks: [60, 70, 65]  },
    5: { id: 5, name: "Ram", marks: [80, 95, 60] }
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


  toGetAverage(stdId){
    if(this.toValidate(stdId)){
        let student = this.students[stdId];
        
        if(student.marks.length  == 0){
            return "no marks available"

        }

        let total = student.marks.reduce((accu,curr)=>accu+curr,0)
      let avg = total/student.marks.length;
      return avg;

    }else {
        return "no student found"
    }
  }
 
  // 4. getGrade(id)
  // → return grade based on average
  //    (90+ → A, 75+ → B, 60+ → C, else D)

  getGrade(stdId){
    if(this.toValidate(stdId)){
        let average = this.toGetAverage(stdId);

        if(average>=90){
            return "A Grade"
        } else if (average>=75){
            return "B Grade"
        } else if (average >= 60){
            return "C Grade"
        } else {
            return "D Grade"
        }

    }else{
        return "student not found"
    }
  }



  // 5. getTopper()
  // → return student with highest average

  getTopper(){
    

        let studentsArr = Object.values(this.students);
        let highestAvg = 0;
        let topper = null;

        for(let student of studentsArr){
            let average = this.toGetAverage(student.id)
            if(average>highestAvg ){
                highestAvg = average;
                topper = student;
            }

        }

        return topper?topper:"topper not found"

  
  }

  // 6. getFailedStudents()
  // → return students with average < 60

getFailed(){
    let studentsArr = Object.values(this.students);
    let failedStuds = [];
    for(let student of studentsArr){
        let average = this.toGetAverage(student.id);

        if(average<60){
            failedStuds.push(student);
        }
       
    }
     return failedStuds;
}

}


let studentObj = new StudentSystem();

// let toValidate = studentObj.tovalidate(5);
// toValidate?console.log("student found"):console.log("no student found")

// let toAddMark = studentObj.toAddMark(4,101);
// console.log(toAddMark);

// let average = studentObj.toGetAverage(1);
// console.log(average);

// let grade = studentObj.getGrade(3);
// console.log(grade);

// let topper = studentObj.getTopper();
// console.log(topper);

let failed = studentObj.getFailed();
console.log(failed);