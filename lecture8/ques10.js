const actions = [
  { user: "A", action: "login" },
  { user: "B", action: "logout" },
  { user: "C", action: "login" }
];

const loginCount = actions.filter(a => a.action === "login").length;

console.log("10.", loginCount);


