//  extract product names
const products = [
    {id : 1 , name: "laptop"},
    {id : 2 , name: "phone"},
    {id : 3 , name: "Tablet"}
];

const q = products.map(product => product.name);

console.log(q);