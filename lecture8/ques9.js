const transactions = [
  { type: "credit", amount: 1000 },
  { type: "debit", amount: 300 },
  { type: "credit", amount: 500 }
];

const totalCredit = transactions
  .filter(t => t.type === "credit")
  .reduce((sum, t) => sum + t.amount, 0);

console.log("9.", totalCredit);
