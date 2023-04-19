

let button = document.getElementById("btn");

button.addEventListener("click", () => {
let body = document.getElementsByTagName("BODY")[0];
let container = document.querySelector(".container")
let first = parseInt(document.getElementById("first").value);
let second = parseInt(document.getElementById("second").value);

let third = first + second;

document.createElement("h1");
let text = document.createTextNode("The result of the operation is:  " + third);
body.appendChild(text);

container.style.display = "none";

})
