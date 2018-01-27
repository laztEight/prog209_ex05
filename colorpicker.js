
var red = 0;
var green = 0;
var blue = 0;
var showColor = document.getElementById("showColor");
 
var btn = document.getElementById("btn");
    
btn.addEventListener("click", clickHandler(), false);

//btn.onclick = clickHandler();

function clickHandler(){
    alert("this button is working");
}
/*function clickHandler(){
    red = document.getElementById("red");
    green = document.getElementById("green");
    blue = document.getElementById("blue");
    
    showColor.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}*/