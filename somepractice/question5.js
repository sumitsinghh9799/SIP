// count total characters

// find total character in all string

const words = ["hello" , "world" , "javascript"];

const q = words.reduce(function(total,word){
    return total += word.length;
},0);

const q5 = words.reduce((total , word) => total += word.length , 0);
console.log(q5);
console.log(q);

const q5demo = words.reduce((join,word) => join += word);
console.log(q5demo);