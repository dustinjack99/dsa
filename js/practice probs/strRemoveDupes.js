//remove all adjacent duplicates in a string
//must be recursive
const removeDupes = (str) => {

    let strArr = str.split(' ');


    for(let i = 0; i < strArr.length; i++) {
        if(strArr[i] === strArr[i + 1]) {
            strArr.splice(strArr[i + 1], 1);
            const newStr = strArr.join(' ');
            console.log(newStr);
            removeDupes(newStr);
        } 
    }

}



console.log(removeDupes("Fred Fred Flinstone Flinstone Flinstone"));