const products=[
    {name:"Laptop",category:"Electronics"},
     {name:"Phone",category:"Electronics"},
      {name:"Shirt",category:"Clothing"}
];
const q1= products.reduce(function(group,product){
    if(!group[product.category]){
        group[product.category]=[];
    }
    group[product.category].push(product.name);
    return group;
},{});
console.log(q1)