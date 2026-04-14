//unregistered_passenger01.js is a program that will play the creatures roar randomly

const roar =Audio("../music/the_creature.mp3");

let min_milsec = 14000;

let max_milsec = 33000;

roar.play();

function randomRoar(){
    let roar_interval = Math.floor(Math.random() * (max_milsec - min_milsec +1))
    + min_milsec;

    setTimeout(() => {
        roar.currentTime = 0;
        roar.play;

        randomRoar();
    }, roar_interval);

}
randomRoar();

if (window)randomRoar();