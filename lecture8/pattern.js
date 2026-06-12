let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";


 for (let j = 1; j <= i; j++) {
 if (j % 2 === 1) {
 row += i + " ";
 } 
 else {
 row += (10 - i) + " ";
 }
 }


 for (let s = 1; s <= (n - i) * 4; s++) {
row += " ";
}


for (let j = i; j >= 1; j--) {
if (j % 2 === 1) {
 row += (10 - i) + " ";
} else {
 row += i + " ";
 }
}

 console.log(row);
}


for (let i = n + 1; i <= 9; i++) {
    let row = "";

   for (let j = 1; j <= 10 - i; j++) {
     if (j % 2 === 1) {
  row += i + " ";
 } else {
 row += (10 - i) + " ";
}
    }

  
    for (let s = 1; s <= (i - 5) * 4; s++) {
    row += " ";
}

    
for (let j = 10 - i; j >= 1; j--) {
 if (j % 2 === 1) {
row += (10 - i) + " ";
} 
else {
row += i + " ";
}
 }
    console.log(row);
}