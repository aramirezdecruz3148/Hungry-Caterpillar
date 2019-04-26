//selecting elements I want to use, (posting the cast list)
const colorButtons = document.querySelectorAll('.color');

//initializing stuff and creating my loop for my buttons
for(let i = 0; i < colorButtons.length; i++) {
    const colorButton = colorButtons[i];
}

//wiring up listening event
colorButton.addEventListener('click', () => {
    console.log(colorButton.value);
});