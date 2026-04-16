// sends user from future timeline to past timeline
// var and function for propulsion2.html to Encounter1.html Sends user to past timeline
const prop2_past_button =document.getElementById('bridge2FrameB');
function prop2Encounter(){
    window.location.href='../Encounter/Encounter1.html';
    console.log('FORWARD TO THE PAST!');
}
if (prop2_past_button){
    prop2_past_button.addEventListener('click', prop2Encounter);
}