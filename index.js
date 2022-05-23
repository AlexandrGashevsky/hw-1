const btnOne = document.querySelector("#task-1-btn");
const btnTwo = document.querySelector("#task-2-btn");
const btnThree = document.querySelector("#task-3-btn");
const inputOne = document.querySelector("#task-1-input");
const inputTwo = document.querySelector("#task-2-input");
const inputThree = document.querySelector("#task-3-input");

function taskOne(text) {
    const array = text.split(' ');
    let numberResult;
    let stringResult = "";
    switch (array[1]) {
        case '+':
            numberResult = array[0].length + array[2].length;
            break;
        case '-': 
            numberResult = array[0].length - array[2].length;
            break;
        case '*': 
            numberResult = array[0].length * array[2].length;
            break;
        case '//': 
            numberResult = array[0].length / array[2].length;
            break;
    }
    for(i = 1; i <= numberResult; i++){
        stringResult += ".";
    }
    return stringResult;
}

function taskTwo(number) {
    if (number < 0) {
        return null;
    }
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let grid = [];
    for(i = 0; i < number; i++){
        grid.push([]);
        for(n = 0; n < number; n++){
            grid[i].push(alphabet.charAt((n+i)%26));
        }
    }
    return grid;
}

function taskThree(text) {
    const braces = text.split("");
    let opening = [ '(']
    let closing = [ ')']
    let arr = []
    for (let i = 0; i < braces.length; i++) {
        if (opening.includes(braces[i])) {
            arr.push(braces[i])
        } else
        if (closing.indexOf(braces[i]) === opening.indexOf(arr[arr.length - 1])) {
            arr.pop()
        } else return false
    } return arr.length === 0;
}

btnOne.addEventListener('click', () => {
    inputOne.value = taskOne(inputOne.value);
})

btnTwo.addEventListener('click', () => {
    console.log(taskTwo(inputTwo.value));
})

btnThree.addEventListener('click', () => {
    console.log(taskThree(inputThree.value));
})