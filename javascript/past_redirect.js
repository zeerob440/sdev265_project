// var for bus-stop.html to Encounter1.html
const hat_button =document.getElementById('hat');
// function for bus-stop.html to Encounter1.html
function busToPast(){
    window.location.href='Encounter/Encounter1.html';
    console.log('Redirecting from bus-stop.html to Encounter1.html');
}

if (hat_button){
    hat_button.addEventListener('click', busToPast);
}
function gameOver() {
    window.location.href = "../game-over/game-over.html";
    console.log('Redirecting to game-over.html');
}
const hole_button =document.getElementById('hole');
function eaten(){
    window.location.href='../Failed/Failed1.html';
    console.log('Redirecting from Encounter1.html to Failed1.html');
}

if (hole_button){
    hole_button.addEventListener('click', eaten);
}
