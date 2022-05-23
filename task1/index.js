function calculate(text) {
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