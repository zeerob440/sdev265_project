// var for bus-stop.html to Encounter1.html
const hat_button =document.getElementById('hat');
// function for bus-stop.html to Encounter1.html
function busToPast(){
    window.location.href='Encounter/Encounter1.html';
    console.log('Redirecting from bus-stop.html to Encounter1.html');
}

function gameOver() {
    window.location.href = "../game-over/game-over.html";
    console.log('Redirecting to game-over.html');
}
const past_hole_button =document.getElementById('hole');
function eaten(){
    window.location.href='../Failed/Failed1.html';
    console.log('Redirecting from Encounter1.html to Failed1.html');
}
const past_hole_button =document.getElementById('Tunnel');
function Tunnel(){
    window.location.href='../Dragon-escape/Dragon-escape
        .html';
    console.log('Redirecting from Encounter.html to Dragon-escape.html');
}
const past_hole_button =document.getElementById('staff');
function Staff(){
    window.location.href='../Staff/Staff.html';
    console.log('Redirecting from Dragon-escape.html to Staff.html');
}

if (past_hole_button){
    past_hole_button.addEventListener('click', eaten);
}

if (past_tunnel_button){
    hat_button.addEventListener('click', Tunnel);
}
if (past_staff_button){
    hat_button.addEventListener('click', Staff);


