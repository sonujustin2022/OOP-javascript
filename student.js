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

  // 2. addMarks(id, newMark)
  // → add a new mark to student's marks array

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