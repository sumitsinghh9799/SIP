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


//ques 11
//Top performing students

const students2=[
    {
          name:"Utkarsh",marks:[80,90,85]
    },

    {
          name:"Yukta",marks:[95,92,98]
    },

    {
          name:"Navneet",marks:[60,70,65]
    }
];

// calculate average marks


const q11arr=(students2.map((s)=>{
    return{

        name:s.name,
        avg:s.marks.reduce((total,m)=>{
            return total+m;

        },0)/s.marks.length

    };

})).filter(s=>s.avg>=85)
.sort((a,b)=>b.avg-a.avg)
.map(s=>s.name);

console.log(q11arr);