let btn1 = document.querySelector(".btn");

btn1.addEventListener("click",() => {
    console.log("click")
});1

btn1.addEventListener("click",() => {
    console.log("click1")
});

const click2 = () => {
    console.log("click2")
}
btn1.addEventListener("click",click2);

btn1.addEventListener("click",() => {
    console.log("click3")
});

btn1.removeEventListener("click",click2);

let nbt = document.createElement("button");

nbt.setAttribute("id","mode");
nbt.innerText = "Change mode";
nbt.style.height = 100 ;
nbt.style.width = 100 ;
nbt.style.textAlign = "centre";
nbt.style.backgroundColor = "lightgreen";
nbt.style.color = "grey";

let body = document.querySelector("body");

let mode = "light";
nbt.addEventListener("click",() => {
    console.log("change mode")
    if (mode === "light"){
        body.classList.add("dark")
        body.classList.remove("light")
        // body.style.backgroundColor = "black";
        // console.log("dark");
        mode = "dark";
    }else{
        body.classList.add("light")
        body.classList.remove("dark")
        // body.style.backgroundColor = "white";
        mode = "light"
    }
});

btn1.before(nbt);