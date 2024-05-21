//Part 2: Multi-Dimensional Arrays and Tuples - Student Grades

//Challenge:
//You are tasked with creating a student grading system. Implement functions and logic to manage student grades effectively.

//1. Define a TypeScript type alias named Student to represent a student with the following properties:
//• name (string): The name of the student.
//• grades (number[ ]): An array of grades for different subjects.

type Student = {
  name: string;
  grades: number[];
};
//2. Create an array named students containing at least three student objects. Each student object should include a name and an array of grades.

let students: Student[] = [
  {
    name: "Ahmed",
    grades: [34, 46, 87],
  },
  {
    name: "Aqib",
    grades: [54, 34, 56],
  },
  {
    name: "Aslam",
    grades: [54, 35, 34],
  },
];
//3. Implement a function named calculateAverageGrade that takes a student's grades as input and returns the average grade for that student.

function calculateAverage(grades: number[]): number {
  const sum = grades.reduce((acc, grade) => acc + grade, 0);
  return sum / grades.length;
}

function getStudentsWithAverages(
  students: Student[]
): { name: string; average: number }[] {
  return students.map((student) => ({
    name: student.name,
    average: calculateAverage(student.grades),
  }));
}
//4. Display each student's name and average grade. Iterate through the students array,calculate the average grade for each student using the calculateAverageGrade function, and print their name and average grade.


const studentsWithAverages = getStudentsWithAverages(students);
console.log(studentsWithAverages);
