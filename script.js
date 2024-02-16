let btn1 = document.querySelector(".btn");
btn1.onclick = () => {
    console.log("button 1");
    let a=23;
    a++;
    console.log(a);
}

let btn2 = document.querySelector("#bt");
btn2.ondblclick = (evt) => 
{
    console.log(evt.type)
    console.log(evt.target)
    console.log("Double")
}

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("mouse is n div")
}

 