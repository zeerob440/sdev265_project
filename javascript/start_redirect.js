/*
    start_redirect.js serves as the central navigation program for all user navigation
    decisions in Time Shift. This program contains event listeners linked to HTML pages
    and functions that redirect the user based on their decisions in the game.  
*/

// Event listener for start to bus-stop (index.html-->bus-stop.html)
document.getElementById('pressToStart').addEventListener('click', titleToBus);

//function for start to bus-stop (index.html-->bus-stop.html)
function titleToBus(){
    window.location.href ="bus-stop.html";
    }

//Event listener for bus-stop.html --> css-corte-real.html
document.getElementById('gloves').addEventListener('click', busToFuture);

//Event listener for bus-stop.html --> css-corte-real.html
function busToFuture(){
    window.location.href ="/corte-real/css-corte-real.html";
}