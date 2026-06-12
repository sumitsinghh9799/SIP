const customers = [
  { customer: "John", amount: 50000 },
  { customer: "Emma", amount: 20000 }
];

const totalSpending = customers.reduce((sum, c) => sum + c.amount, 0);

console.log("8.", totalSpending);
