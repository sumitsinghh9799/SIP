let student={
    name:"naman",
    age:24,
    city:"Delhi",
};
console.log(student);

// dot notation
console.log(student.name);

// bracket notation
console.log(student["age"]);

// add 
student.phone=36822;
console.log(student);

// update
student.age=25;
console.log(student);

// delete
delete student.phone;
console.log(student);

let obj={
    name:"A",
    greet(){
        console.log("hello");
    }
}
obj.greet();

for(key in student){
    console.log(key,student[key]);
}

let person={
    name:"Arpan",
    age:20,
    address:{
        city:"Silicon",
        jagah: "Palash Parisar",
        state:"MP"
    }
};
console.log(person);

let array=[a={name:"a"},b={name:"b"},c={name:"c"}];
console.log(array);
console.log(person.address.city);
console.log(person["address"]["city"]);
console.log(array[0].name);

let name1="naman";
console.log("Hello "+name1+"eiuhki") ;
console.log(`hello ${name1} jdihcekjjdojlc efk ewh`) // back tick

function greet1(name="Guest"){
    console.log(`hello ${name}`);
}
greet1();

// array destruct
let [a1,b1]=[10,20];
console.log(a1);
console.log(b1);

// object destruct
let {name,age}=student;
console.log(name);
console.log(age);

// sprad operator
let arr1=[1,2,3,4,5];
let arr2=[...arr1];

console.log(arr2);

let nums=1;
function sum(...nums){
    nums++;
    return nums;
}
console.log(sum(nums));

// enhanced Object Literals
let name2="kashish";
let student2={
    name2
}
console.log(student2);

// merging the objects
let obj3={
    a:1
}
let obj4={
    b:2
}
let merged={...obj3,...obj4};
console.log(merged);

// object.keys()
// object ki saari keys return kardega

console.log(Object.keys(student));

// object.values()
// object ki saari values return kardega

console.log(Object.values(student));

// object.entries
// saare key value pair return kardega

console.log(Object.entries(student));

// object.assign()
// dusre object me pehle wali ki copy bana lega
let copy=Object.assign({},student);
console.log(copy);

let copy1={...student};
console.log(copy1);
// in Operator
console.log("name" in student);

// hasownproperty
console.log(student.hasOwnProperty("name"));

// Object.freeze()
//kuchh bhi change nahi karega

// Object.freeze(student);
// student.age=24;
// console.log(student);

//Object.seal
// update ho payega lekin add or delete nahi kar skte
Object.seal(student);
student.age=24;
console.log(student);

const sdf=structuredClone(student);
console.log(sdf);