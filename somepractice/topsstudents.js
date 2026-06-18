const students =[
    {
        name:"Utkarsh",
        marks:[80,90,85]
    },

    {
        name:"Yukta",
        marks:[95,92,96]
    },
    
    {
        name:"Navneet",
        marks:[60,70,65]
    },
];
const topStudent = students.reduce((top, student) => {
    if (student.marks > top.marks) {
        return student;
    }
    return top;
});

console.log("Top Performing Student:");
console.log("Name:", topStudent.name);
console.log("Marks:", topStudent.marks);
