// var for bus-stop.html to Encounter1.html
const hat_button =document.getElementById('hat');
// function for bus-stop.html to Encounter1.html
function busToPast(){
    window.location.href='Encounter/Encounter1.html';
    console.log('Redirecting from bus-stop.html to Encounter1.html');
}
const past_gameover_button = document.getElementById('past_gameover');
function pastGameOver() {
    window.location.href = "../game-over/game-over.html";
    console.log('Redirecting to game-over.html');
}
const past_hole_button =document.getElementById('hole');
function eaten(){
    window.location.href='../Failed/Failed1.html';
    console.log('Redirecting from Encounter1.html to Failed1.html');
}
const past_tunnel_button =document.getElementById('tunnel');
function Tunnel(){
    window.location.href='../Dragon-Escape/Dragon-escape.html';
    console.log('Redirecting from Encounter.html to Dragon-escape.html');
}
const past_staff_button =document.getElementById('staff');
function Staff(){
    window.location.href='../Staff/Staff.html';
    console.log('Redirecting from Dragon-escape.html to Staff.html');
}
const past_sword_button =document.getElementById('sword');
function Sword(){
    window.location.href='../Sword/Sword.html';
    console.log('Redirecting from Dragon-escape.html to Sword.html');
}

const DRAGONFIGHT_button =document.getElementById('FRematch');
function FRematch(){
    window.location.href='../DRAGONFIGHT/DRAGONFIGHT.html';
    console.log('Redirecting from Sword.html to DRAGONFIGHT.html');
}


if (past_DRAGONFIGHT_button){
    past_DRAGONFIGHT_button.addEventListener('click', FRematch);

if (past_sword_button){
    past_sword_button.addEventListener('click', Sword);
    
if (past_gameover_button){
    past_gameover_button.addEventListener('click', pastGameOver);
if (past_hole_button){
    past_hole_button.addEventListener('click', eaten);
}

if (past_tunnel_button){
    past_tunnel_button.addEventListener('click', Tunnel);
}
if (past_staff_button){
    past_staff_button.addEventListener('click', Staff);
}
// unique game over if structure that invoke pastGameOver past_gameover id exists on the document
if (past_gameover_button){
    past_gameover_button.addEventListener('click', pastGameOver);
}
// if statement to invoke busToPast() if the 'hat' element ID exists on an HTML document. 
if (hat_button){
    hat_button.addEventListener('click', busToPast);
}
if (past_gameover_button){
    past_gameover_button.addEventListener('click', pastGameOver);
}
