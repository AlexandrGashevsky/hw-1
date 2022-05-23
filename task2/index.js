function grid(number) {
    if (number < 0) {
        return null;
    }
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = [];
    for(i = 0; i < number; i++){
        result.push([]);
        for(n = 0; n < number; n++){
            result[i].push(alphabet.charAt((n+i)%26));
        }
    }
    return result;
}