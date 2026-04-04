/*
    start_redirect.js serves as the central navigation program for all user navigation
    decisions in Time Shift. This program contains event listeners linked to HTML pages
    and functions that redirect the user based on their decisions in the game.  
*/

// Event listener for start to bus-stop (index.html-->bus-stop.html)
const start_button = document.getElementById('pressToStart')
//function for start to bus-stop (index.html-->bus-stop.html)
function titleToBus(){
    window.location.href ="bus-stop.html";
    }

//Event listener for bus-stop.html --> css-corte-real.html
const gloves_button = document.getElementById('gloves');
//function for bus-stop.html --> css-corte-real.html
function busToFuture(){
    window.location.href ="corte-real/css-corte-real.html";
}

const frame_d_button = document.getElementById('frame_d_nav');

function futureToFrameD(){
    window.location.href = "../frame_d/frame_d.html";
}

// if-if structure to determine which function to invoke from html pages.

// index.html to bus-.html
if (start_button) {
    start_button.addEventListener('click', titleToBus);
}
// bus-stop.html to css-corte-real.html
if (gloves_button) {
    gloves_button.addEventListener('click', busToFuture);
}
// css-corte-real.htmk to frame_d.html if statement
if (frame_d_button) {
    frame_d.addEventListener('click', futureToFrameD )
}
