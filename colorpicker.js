//defing varables
var red = 0;
var green = 0;
var blue = 0;
var showColor = document.getElementById("showColor");
 
var btn = document.getElementById("btn");
    
// showing the color in the box
function clickHandler(){
    red = document.getElementById("red").value;
    green = document.getElementById("green").value;
    blue = document.getElementById("blue").value;
    
    showColor.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}