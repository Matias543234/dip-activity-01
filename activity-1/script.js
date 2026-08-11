// Activity 1: Display User Input
//
// Write JavaScript to take the user's input and display it on the page.
// If the user types "capybara", show a special message instead.
//
// Open activity-1.md for detailed instructions.

const form = document.getElementById('form');
const userInput = document.getElementById('userInput')
const output = document.getElementById('output')

function onSubmit(e) {
    e.preventDefault();

    const userInputValue = document.getElementById('userInput').value;

    if (userInput.value.toLowerCase() === 'capybara'){
        output.innerText = 'You found the secret';
    }else{
        output.innerText = userInputValue
    }

   



}

form.addEventListener('submit', onSubmit);