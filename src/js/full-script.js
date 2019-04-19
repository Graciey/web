var div = document.getElementById("full");

function getRandomColor() {
    var letters = ['#017181', '#138382', '#C4E80A'];
    // console.log(letters);
    var color = '';

    letters = shuffle(letters);
    
    for (var i = 0; i < letters.length; i++ ) {
        // console.log(letters[i])
        color = letters[i];
        return color;
    }
    
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }

    return array;
}

function changeColor(){
div.style.backgroundColor= getRandomColor();
}

setInterval(changeColor,3000);

// #017181
// #138382
// #C4E80A