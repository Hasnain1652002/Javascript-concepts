let newBTN = document.createElement("button");
newBTN.innerText = "Follow Me";
newBTN.style.backgroundColor = "red";
newBTN.style.color = "white";
newBTN.setAttribute("id","butn");

let para = document.querySelector("p");

let body = document.querySelector("body");

body.prepend(newBTN);

para.classList.add("content");
para.classList.remove("para");
