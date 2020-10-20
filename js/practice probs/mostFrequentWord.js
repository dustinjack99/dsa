const mostFreqWord = (strArr) => {
    let hashT = new hashTable();

    strArr.forEach(word => {
        hashT.insert(word);
    })

    return hashT.getMostFreq();
} 


class hashTable {
    constructor() {
        this.tableSize = 25;
        this.store = [];
        this.largestArr = 0;
        this.mostFrequent = null;
    }

    insert(key) {
        
        let index = this.hash(key, this.tableSize);
        if(!this.store[index]) {
            this.store[index] = [];
        }
        
        this.store[index].push(key);

        if(this.store[index].length > this.largestArr) {
            this.largestArr = this.store[index].length;
            this.mostFrequent = key;
        }
    }

    hash(key, n) {
        let sum = 0;

        for(let i = 0; i < key.length; i++) {
            let num = key.charCodeAt(i);

            sum += num;
        }

        return sum % n;
    } 

    getMostFreq() {
        return `Most Frequent Word: ${this.mostFrequent} Appears: ${this.largestArr} times.`;
    }
}
console.log(mostFreqWord(['fred', 'fred', 'fred', 'flinstone', 'flinstone', 'jane', 'jane', 'jetson', 'jetson']))