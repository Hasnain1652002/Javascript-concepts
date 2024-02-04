for (let i in product){
    console.log(i);
    console.log(product[i]);
}

for (let i=0; i<=100;i++){
    if (i%2 !== 0) console.log(i)
}

let randNo = 5;
let userNo = prompt("Guess the no. ");

while (userNo != randNo){
    userNo = prompt("Guess the no. ");
}
console.log('congrat')