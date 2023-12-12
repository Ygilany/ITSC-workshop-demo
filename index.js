const addButton = document.getElementById('add-btn');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const list = document.querySelector('#list');

const add = (arg1, arg2) => Number(arg1) + Number(arg2);

function subtract (arg1, arg2) {
    return arg1 - arg2;
}


// add button event listenter for hover

addButton.addEventListener('click', () => {
    const input1Value = input1.value;
    const input2Value = input2.value;

    const result = add(input1Value, input2Value);
    const resultNarrative = `${input1Value} + ${input2Value} = ${result}`;
    console.log(resultNarrative);
});


