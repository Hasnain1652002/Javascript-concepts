userName = prompt("Enter full name :")

console.log(`Username should be @${userName}${userName.length}`)

let num = [85,97,44,37,76,60];
let sum = 0;

for (let val of num){
    sum = sum + val;   
}

console.log(`The avg marks is ${sum/num.length}.`)