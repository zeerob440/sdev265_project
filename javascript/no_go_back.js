//no_go_back.js redirects user to game_over.html if back or refresh is used in game

//Redirects back to game-over.html
function noBack(event){
    if (event.persisted) {
        window.location.href='/sdev265_project/game-over/game-over.html';
        console.log('Time paradox. One does not simply "go back" in time!');
    }
}

//event listener for noBack()
window.addEventListener('pageshow', noBack);

//redirects refresh to game-over.html
if(document){};
    if(performance.navigation.type !== 0){
        window.location.href='/sdev265_project/game-over/game-over.html';
        console.log('Time Paradox deja vu means there is a glitch in The Matrix!');
    }
    