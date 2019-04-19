var div = document.getElementById("cards");

function getColor() {
    var letters = '012345678ABCDEF';
    var color = '#',
    for (var i = 0; i < 6; i++ ){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(){
    div.style.backgroundColor = getColor();
}

setInterval(changeColor, 5000);