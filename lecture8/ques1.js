const students = [
  { name: "John", marks: [80, 90, 85] },
  { name: "Emma", marks: [95, 92, 98] }
];

const averages = students.map(student => ({
  name: student.name,
  average: student.marks.reduce((a, b) => a + b, 0) / student.marks.length
}));

console.log("1.", averages);


