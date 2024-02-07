function vowels(msg){
    let count=0;
    for (let char of msg){
        if (["a", "e", "i", "o", "u"].includes(char)) {
            count++;
        }
    }
    return count;
}

const countV = (str) => {
    let count=0;
    for (let char of str){
        if (["a", "e", "i", "o", "u"].includes(char)) {
            count++;
        }
    }
    return count;
}