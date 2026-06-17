const students =[
    {name:"A",marks:36},
    {name:"B",marks:75},
    {name:"C",marks:25},
    {name:"D",marks:45}
];

const passedStudents = students.filter(student => student.marks >= 40).map(student => student.name);

console.log(passedStudents);