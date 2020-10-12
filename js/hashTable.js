class HashTable {
    constructor() {
        //remember that this is an array
        this._storage = [];
    }

    insert(key, value) {
        let hashVal = this.hash(value, key);
        
        if(!this._storage[hashVal]) {
            this._storage[hashVal] = [];
        }

        let tuple = [key, value];

        this._storage[hashVal].push(tuple);
    }

    remove(key) {

    }

    retreive(key) {

    }

    //takes string and number
    hash(str, n) {
        let sum = 0;
        //loops through string and accumulates code value to sum
        for (let i = 0; i < str.length; i ++) {
            sum += str.charCodeAt(i) * 3;
        }

        //returns a hashed value based on modulo key # and sum
        return sum % n;
    }
}

const hash = new HashTable();

hash.insert(4, "There once was a man from nantucket");
hash.insert(2, "There once was a gal from nantucket");
hash.insert(2, "There once was a man from nantucket");

console.log(hash);