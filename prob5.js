
{
let numbers = [65, 44, 21, 4];
let sum = 0;
let calSq = (val,i)=>{
    console.log(numbers[i]);
    numbers[i]=val*val;    
}
numbers.forEach(calSq);
}
let number = [65, 44, 21, 4];
let sum = 0; 
numbers.forEach((val,i)=>{
    console.log(numbers[i]);
    numbers[i]=val*val;    
});

let numbers = [65, 44, 21, 98];
let newArr = numbers.map((val)=>{
    return val;
});

console.log(newArr)