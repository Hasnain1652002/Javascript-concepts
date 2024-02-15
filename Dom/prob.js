let heading = document.querySelector("h2");


heading.innerText = heading.innerText +" looping javascript";

let div = document.querySelectorAll(".box");
console.dir(div);

div.forEach((item,index) => {
    item.innerText = item.innerText + `\n${index}`
});