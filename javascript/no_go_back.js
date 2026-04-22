//no_go_back.js redirects user to game_over.html if back or refresh is used in game

if(document){};
    if(performance.navigation.type !== 0){
        window.location.href='../game-over/game_over.html';
    }