/*
    start_redirect.js serves as the central navigation program for all user navigation
    decisions in Time Shift. This program contains event listeners linked to HTML pages
    and functions that redirect the user based on their decisions in the game.  
*/
// Navigation variables and functions.

// var for index.html to main.html
const play_button = document.getElementById('play');

// function for index.html to main.html
function indexToMain(){
    window.location.href ="main.html";
    console.log('Redirecting to main.html.');
}

// var for main.html to bus-stop.html
const start_button = document.getElementById('pressToStart');
//function for main.html to bus-stop.html 
function titleToBus(){
    window.location.href ="bus-stop.html";
    console.log('Redirecting to bus-stop.html.');
    }

//var for bus-stop.html --> css-corte-real.html
const gloves_button = document.getElementById('gloves');
//function for bus-stop.html --> css-corte-real.html
function busToFuture(){
    window.location.href ="corte-real/css-corte-real.html";
    console.log('Redirecting to css-corte-real.html.');
}

// var for css-corte-real.html to frame_d.html
const frame_d_button = document.getElementById('frame_d_nav');
// function for css-corte-real.html to frame_d.html
function futureToFrameD(){
    window.location.href = "../frame-d/frame_d.html";
    console.log('Redirecting to frame_d.html');
}

// var for css-corte-real.html to frame_c.html
const frame_c_button = document.getElementById('frame_c_nav');
// function for css-corte-real.html to frame_c.html
function futureToFrameC(){
    window.location.href ="../frame-c/frame_c.html";
    console.log('Redirecting to frame_c.html.');
}

//var ANY END GAME STATE to game-over.html
const gameover_button = document.getElementById('gameover');
/*
    function for ANY END GAME STATE to game-over.html.
    this will function globally as long as all game over states
    1 file deep, and the button id ='gameover' in the html.file.
*/
function gameOver() {
    window.location.href = "../game-over/game-over.html";
    console.log('Redirecting to game-over.html');
}

//var REDIRECTS FROM game-over.html to index.html DO NOT TOUCH.
const exit_to_main_button = document.getElementById('exit_main_nav');
//function for game-over.html to index.html
function gameOverToMain(){
    window.location.href = "../index.html";
    console.log('Redirecting to index.html.');
}
// var for frame_c.html to propulsion1.html
const propulsion1_button =document.getElementById('frame_c_propulsion1');
// function for frame_c.html and propulsion1.html
function frameCProp1() {
    window.location.href= "../propulsion/propulsion1.html";
    console.log('Navigating frame_c.html to propulsion1.html');
}

// var for frame_c.html to armory1.html
const armory1_button =document.getElementById('frame_c_armory1');
// function for frame_c.html to armory1.html
function frameCArmory1(){
    window.location.href='../armory/armory1.html';
    console.log('Redirecting to armory1,html.')
}

// var for bus-stop.html to Encounter1.html
const hat_button =document.getElementById('hat');
// function for bus-stop.html to Encounter1.html
function busToPast(){
    window.location.href='Encounter/Encounter1.html';
    console.log('Redirecting from bus-stop.html to Encounter1.html');
}


// if-if structure to determine which function to invoke from html pages via event listeners.

// event listener index.html to main.html
if (play_button){
    play_button.addEventListener('click', indexToMain);
}

// Event Listener main.html to bus-stop.html
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

// Event listener for ALL END GAME STATES to game-over.html
if (gameover_button){
    gameover_button.addEventListener('click', gameOver);
}

//event listener for game-over.html to index.html
if (exit_to_main_button){
    exit_to_main_button.addEventListener('click', gameOverToMain);
}

//Event Listener for css-corte-real.html to frame_c.html
if (frame_c_button){
    frame_c_button.addEventListener('click', futureToFrameC);
}
// event listener for frame_c.html to propulsion1.html
if (propulsion1_button){
    propulsion1_button.addEventListener('click', frameCProp1);  
}

// event listener for bus-stop.html to Encounter1.html
if (hat_button){
    hat_button.addEventListener('click', busToPast);
}

//event listener for for frame_c.html to armory1.html

if (armory1_button){ 
    armory1_button.addEventListener('click', frameCArmory1);
}