const people=[
    {name:"A",age:"16"},
    {name:"B",age:"22"},
    {name:"C",age:"18"},
];
const adults=people.filter(person => person.age>=18);

console.log(adults);
