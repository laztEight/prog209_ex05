//defing varables
var red = 0;
var green = 0;
var blue = 0;
var showColor = document.getElementById("showColor");
 
var btn = document.getElementById("btn");
var btnReset = document.getElementById("btnReset");
    
// showing the color in the box
function clickHandler(){
    red = document.getElementById("red").value;
    green = document.getElementById("green").value;
    blue = document.getElementById("blue").value;
    
    showColor.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    showColor.textContent = colorToHex(showColor.style.backgroundColor);
}

function colorToHex(color) {
    if (color.substr(0, 1) === '#') {
        return color;
    }
    var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
    
    var red = parseInt(digits[2]);
    var green = parseInt(digits[3]);
    var blue = parseInt(digits[4]);
    
    var rgb = blue | (green << 8) | (red << 16);
    return digits[1] + 'hex #' + rgb.toString(16);
}

function clickReset(){
    document.getElementById("mainForm").reset();
    showColor.style.backgroundColor = 'rgb(255, 255, 255)';
    showColor.textContent = "";
}