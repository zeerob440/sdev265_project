// prints a random message to innerHtml on game-over.html

const min = 0;
const max = 3;

function randomMessage(){ let value = Math.floor(Math.random() * (max - min +1)) + min;

    let messages =['Existence is an ephemeral flower that grows in a cosmically indifferent universe...',
    'Time will continue, always...', 'Time destroys all weak things...', 'The universe only answers in silence...'
];
    
    document.getElementById('go_message').innerHTML = messages[value];
}

if(document){randomMessage()};