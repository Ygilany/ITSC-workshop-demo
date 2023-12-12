const addButton = document.getElementById('add-btn');
// Add an input type html element with an id of input1
const input1: HTMLInputElement = document.querySelector('#input1');
const input2: HTMLInputElement = document.querySelector('#input2');
const list = document.querySelector('#list');
const paragraph = document.querySelector('#fourth-paragraph');

const add = (arg1:string, arg2:string) => Number(arg1) + Number(arg2);

function subtract (arg1, arg2) {
    return arg1 + arg2;
}

interface IPerson {
    title: string
    name: IName
    age?: number
}
interface IName {
    firstName: string
    lastName: string
}

function greet(person: IPerson) {
    console.log(`Hello ${person.title} ${person.name.lastName}. You are ${person.age} years old`);
}
const person: IPerson = {
    name: {firstName: 'John', lastName: 'Doe'},
    age: 20,
    title: 'Mr'
}

const person2: IPerson = {
    name: {firstName: 'Jane', lastName: 'Doe'},
    title: 'Ms',
    age: 20,
};
console.log(greet(person));

// add button event listenter for hover

addButton.addEventListener('click', () => {
    const input1Value = input1.value;
    const input2Value = input2.value;

    const result = add(input1Value, input2Value);
    const resultNarrative = `${input1Value} + ${input2Value} = ${result}`;
    console.log(resultNarrative);

    paragraph.innerHTML = `${paragraph.innerHTML} ${resultNarrative} <br/>`;

});


