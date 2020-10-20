//reverse the words of a given string

const wordReverse = (str) => {

    let wordStack = [];

    let wordArr = str.split(' ');

    while(wordArr.length) {
        wordStack.push(wordArr.pop());
    }
    
    let result = wordStack.join(' ');

    return result;
}

console.log(wordReverse("I am the very model of a modern major general"));