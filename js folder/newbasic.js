//length 
//string ki size batayega 

let name="vsdgfsdvj";
console.log(name.length);




//to uppercase 
// sabko capital me convert kar dega 

console.log(name.toUpperCase());




//tolowercase
//sabko lowercase me convert kar dega 

let name1="DEVANSH";
    console.log(name1.toLowerCase());





//Trim 
// starting or ending ke spaces ko delete kar dega or ek sentance bana dega 


let g="       rggehtg  ";
console.log(g.trim());
console.log(g.trim().length);




//includes

let q="java script is not awesome";
console.log(q.includes("is"));



//starts with 
//baata hai ki aisa koi word jo start me use ho raha hai ki nahi 

let w="Devansh is a girl";
console.log(w.startsWith("D"));




//ends with 
//batata hai ki koi word ussey end ho raha hai ki nahi 

let e="bfb hjfcbdhbcbhfhd bhfcdb ";
console.log(e.endsWith("cbd"));




//index of 

console.log(e.indexOf("fhd"));




//last index of 
// piche se uska index dekhne lagega 

console.log(e.lastIndexOf("bh"));





//slice 
//range me jitne elements pade he unko return karega 


console.log(e.slice(2,19));






//sub-string
//


console.log(e.substring(1,23));





//replace 
//selected index me replace 


console.log(e.replace("fhd","ooo"));





//replaceall
//string me jaha jaha hoga vaha replace hoga 

console.log(e.replaceAll("bh","uu"));






//spilt
//jaha jaha space hogi un sabko new array ya string bana dega 

console.log(e.split(" "));
console.log(e);

