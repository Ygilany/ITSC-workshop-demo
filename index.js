const clickMeButton = document.getElementById('clickme-btn');
const headerLabel = document.getElementsByTagName('h1')[1];
// const nameInput = document.getElementById('name-input');
const nameInput = document.querySelector('#name-input');

console.log(headerLabel)

clickMeButton.addEventListener('click', () => {
    const inputValue = nameInput.value;
    console.log(`You clicked me! ${inputValue}`);
    headerLabel.textContent = inputValue;
    headerLabel.style.color = 'green';
});