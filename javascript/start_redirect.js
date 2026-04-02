// start_redirect is a short script that uses an event listener to redirect the user to bus_stop.html

document.getElementById('pressToStart').addEventListener('click', titleToBus);

function titleToBus(){
    window.location.href ="bus-stop.html";
    }