const marks=[80,90,70,60];

const average = marks.reduce((sum,mark) => sum + mark , 0)/ marks.length;

console.log(average);