let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id) 

let para = document.querySelector(".para");
console.log(para)

para.setAttribute("class","par");
console.log(para)

div.style.backgroundColor = "red"; 
div.style.visibility = "fade"