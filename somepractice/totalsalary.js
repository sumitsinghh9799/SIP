// total salary of employe

const employees = [
    { name:"A", salary: 30000},
    { name:"B", salary: 50000},
    { name:"C", salary: 40000},
    
];

const totalsalary = employees.reduce((sum,emp) => sum+ emp.salary, 0);

console.log(totalsalary);
