const text = "The fox is quick. The fox is smart.";

const foxCount = text
  .toLowerCase()
  .split(/\W+/)
  .filter(word => word === "fox").length;

console.log("3.", foxCount);

