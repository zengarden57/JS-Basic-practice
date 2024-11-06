
/*let randomNumber = document.getElementById('#rock');addEventListener('click', function() 
{
let randomNumber = Math.floor(Math.random() * 100 ) + 1;
}
);*/

let score = JSON.parse(localStorage.getItem('score')) ||
{
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();


/*
if (!score)
{
score =  
{
    wins: 0,
    losses: 0,
    ties: 0
};
}
*/


function gameResult(playerMove) 
{
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'rock') 
    {
        if (computerMove === 'paper') 
            {
            result = 'You Lose!';
            }
        else if (computerMove === 'scissors') 
            {
            result = 'You Win!';
            }
        else if (computerMove === 'rock') 
            {
            result = 'Tie.';
            }
    }

    if (playerMove === 'scissors') 
    {
        if (computerMove === 'rock') 
            {
            result = 'You Lose!';
            }
        else if (computerMove === 'paper') 
            {
            result = 'You Win!';
            }
        else if (computerMove === 'scissors') 
            {
            result = 'Tie.';
            }
    }

    if (playerMove === 'paper') 
    {
        if (computerMove === 'scissors') 
            {
            result = 'You Lose!';
            }
        else if (computerMove === 'rock') 
            {
            result = 'You Win!';
            }
        else if (computerMove === 'paper') 
            {
            result = 'Tie.';
            }
    }

    if (result === 'You Win!') 
    {
    score.wins += 1;
    }
    else if (result === 'You Lose!') 
    {
    score.losses += 1;
    }
    else if (result === 'Tie.') 
    {
    score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result')
        .innerHTML = result;

    document.querySelector('.js-moves')
        .innerHTML = `You 
                    <img src="rps-images/${playerMove}-emoji.png" class="move-icon">
                    <img src="rps-images/${computerMove}-emoji.png" class="move-icon">
                    Computer`;
}

function updateScoreElement() 
{
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() 
    {
    const randomNumber = (Math.floor(Math.random() * 100) + 1);

    let computerMove = '';

    if ((randomNumber >= 0) && (randomNumber < 33)) 
    {
        computerMove = 'rock';
    }
    else if ((randomNumber >= 33) && (randomNumber < 66)) 
    {
        computerMove = 'paper';
    }
    else 
    {
        computerMove = 'scissors';
    }

    return computerMove;
}