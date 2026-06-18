const fruits=[
    "apple",
    "mango",
    "banana",
   "apple",
    "pinaple",
    "banana",
    "mango",
    "mango",
];
const fal=fruits.reduce(function(occ,fruit){
    occ[fruit]=(occ[fruit]||0)+1;
    return occ;
},{});

const falarr=fruits.reduce((occ,fruit) => {occ[fruit]= (occ[fruit]||0)+1; return occ},{});

console.log(fal);
console.log(falarr);