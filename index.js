
document.querySelector("h1").innerHTML = "some text";


const hideButton = document.querySelector("button");
hideButton.addEventListener("click", function() {
    document.querySelector("h1").style.display="none";
});

const unhideButton = document.querySelector("#button2");
unhideButton.addEventListener("click", function() {
    document.querySelector("h1").style.display="block";
});