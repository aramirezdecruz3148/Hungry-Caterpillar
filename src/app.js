import vomitUnicorn from './vomit-unicorn.js';
//selecting elements I want to use, (posting the cast list)
const colorButtons = document.querySelectorAll('.color');
const unicorn = document.getElementById('unicorn');
const pukes = document.querySelectorAll('.part');
const cleanerButton = document.getElementById('puke-cleaner');

//initializing stuff and creating my loop for my buttons
for(let i = 0; i < colorButtons.length; i++) {
    const colorButton = colorButtons[i];

    //wiring up listening event
    colorButton.addEventListener('click', () => {
        vomitUnicorn(unicorn, colorButton.value);
    });
}

    //wiring up listening event and button removal
cleanerButton.addEventListener('click', () => {
    unicorn.innerHTML = ''; 
});