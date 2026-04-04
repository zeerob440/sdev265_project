/*
    start_redirect.js serves as the central navigation program for all user navigation
    decisions in Time Shift. This program contains event listeners linked to HTML pages
    and functions that redirect the user based on their decisions in the game.  
*/

// var for start to bus-stop (index.html-->bus-stop.html)
const start_button = document.getElementById('pressToStart')
//function for start to bus-stop (index.html-->bus-stop.html)
function titleToBus(){
    window.location.href ="bus-stop.html";
    }

//var for bus-stop.html --> css-corte-real.html
const gloves_button = document.getElementById('gloves');
//function for bus-stop.html --> css-corte-real.html
function busToFuture(){
    window.location.href ="corte-real/css-corte-real.html";
}

// var for css-corte-real.html to frame_d.html
const frame_d_button = document.getElementById('frame_d_nav');
// function for css-corte-real.html to frame_d.html
function futureToFrameD(){
    window.location.href = "../frame_d/frame_d.html";
}

// var for frame_d.html to game-over.html
const frame_d_game_over_proceed_button = document.getElementById('frame_d_gameover');
// function for frame_d.html to game-over.html
function frameDToGameOver() {
    window.location.href = "../game-over/game-over.html";
}

//var for game-over.html to index.html
const exit_to_main_button = document.getElementById('exit_main_nav');
//function for game-over.html to index.html
function gameOverToMain(){
    window.location.href = "../index.html";
}



// if-if structure to determine which function to invoke from html pages via event listeners.

// Event Listener index.html to bus-.html
if (start_button) {
    start_button.addEventListener('click', titleToBus);
}
// Event Listener bus-stop.html to css-corte-real.html
if (gloves_button) {
    gloves_button.addEventListener('click', busToFuture);
}
// Event Listener css-corte-real.html to frame_d.html if statement
if (frame_d_button) {
    frame_d_button.addEventListener('click', futureToFrameD );
}
// Event listener for frame_d.html to game-over.html
if (frame_d_game_over_proceed_button){
    frame_d_game_over_proceed_button.addEventListener('click', frameDToGameOver);
}
//event listener for game-over.html to index.html
if (exit_to_main_button){
    exit_to_main_button.addEventListener('click', gameOverToMain);
}