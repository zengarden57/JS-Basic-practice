// Testing Class True or False
const button = document.querySelector('.js-button')

console.log(button.classList.contains('js-button'));

// Gaming Button Toggle

function buttonStatusToggle(selector)
{
    const button = document.querySelector(selector);
    if(!button.classList.contains('is-toggled'))
    {
        turnOffPreviousButton();

        button.classList.add('is-toggled');
    }
    else
    {
        button.classList.remove('is-toggled');
    }
}

function turnOffPreviousButton()
{
    const previousButton = document.querySelector('.is-toggled');
    if(previousButton)
    {
        previousButton.classList.remove('is-toggled');
    }
}


/*
function buttonStatusToggle1(button)
{
    let buttons = document.querySelector('.js-toggle');

    buttons.forEach(btn => btnclassList.remove('is-toggled'));
    button.classList.add('is-toggled');
}
*/

// Amazon Calculator

function calculateTotal()
{
    const inputElement = document.querySelector
    ('.js-cost-input');
    let cost = Number(inputElement.value);

    // Reset Message
    document.querySelector('.js-total-cost')
        .innerHTML = '';
    document.querySelector('.js-error-message')
        .innerHTML = '';

    if(cost < 0)
    {
        document.querySelector('.js-error-message')
            .innerHTML = 'Error: cost cannot be less than $0';
        return; // Terminate program early if first IF is tripped
    }

    if (cost < 40)
    {
        cost += 10;
    }

    document.querySelector('.js-total-cost')
        .innerHTML = `$${cost}`;
}

function handleCostKeyDown(event)
{
    if(event.key === 'Enter')
    {
    calculateTotal();
    }
}
