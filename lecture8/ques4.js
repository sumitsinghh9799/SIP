const employees = [
  { name: "A", salary: 50000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 60000 }
];

const salaries = employees.map(emp => emp.salary);
const totalSalary = salaries.reduce((a, b) => a + b, 0);

console.log("4. Salaries:", salaries);
console.log("4. Total Salary:", totalSalary);

