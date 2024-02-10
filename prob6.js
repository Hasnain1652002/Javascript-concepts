
{
let numbers = [65, 44, 21, 98];
let Arr = numbers.filter((val)=>{
    return val%2 === 0 ;
});
console.log(Arr);}

let numbers = [65, 44, 21, 98];
let out = numbers.reduce((res,curr)=>{
    return res+curr ;
});
console.log(out);

{let numbers = [65, 44, 21, 98];
let out = numbers.reduce((res,curr)=>{
    return res>curr ? res : curr  ;
});
console.log(out);}

