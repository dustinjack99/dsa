class HashTable {
    constructor() {
        //remember that this is an array
        this._storage = [];
        //initialize with a set size
        this._tableSize = 25;
        this._slots = 25;
    }

    insert(key, value) {
        let index = this.hash(key, this._tableSize);

        //remember to initialize an empty array at the index
        //but you remembered the first time :) :) :)
        if(!this._storage[index]) {
            this._storage[index] = [];
            this._slots--;
        }

        if(this._slots <= this._slots / 2) {
            this.resize();
            this._slots = this._tableSize;
        }

        this._storage[index].push([key, value]);
    }

    remove(key) {
        let index = this.hash(key, this._tableSize);
        
        if(this._storage[index]) {
            const arrayAtIndex = this._storage[index];
            for(let i = 0; i < arrayAtIndex.length; i ++) {
                let keyValueArray = arrayAtIndex[i];
                if(keyValueArray[0] === key) {
                    keyValueArray = [];
                    console.log("removed value at: " + this._storage[index][i]);
                    
                } else {
                    console.log("Key not found in table");
                }
            }
            
        }
    }

    retreive(key) {
        const index = this.hash(key, this._tableSize);
        //save the array index
        const arrayAtIndex = this._storage[index];
        if (this._storage[index]) {     
            //loop through array at index  
            for(let i = 0; i < arrayAtIndex.length; i ++) {
                const keyValueArray = arrayAtIndex[i];
                //see if the key exists in any stored array
                if(keyValueArray[0] === key) {
                    return keyValueArray[1];
                    
                } else {
                    console.log("Key not found in table");
                }
            }
        }
    }

    resize() {
        this._tableSize = this._tableSize * 2;
        //TODO: go through and rehash all values
        //REMEMBER TO REHASH ALL VALUE AFTER RESIZING
        for(let i = 0; i < this._storage.length; i++) {
            if(this._storage[i].isArray()) {
                let arrayAtIndex = this._storage[i];
                for(let j = 0; j < arrayAtIndex.length; j++) {
                    let keyValArray = arrayAtIndex[j];
                    this.insert(keyValArray[0]);
                }
            }
        }
    }

    //takes string and number, number is going to be the range
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

hash.insert("There once was a man from nantucket", 2);
hash.insert("There once was a gal from nantucket", 3);
hash.insert("There once was a man from nantucket", 2);

console.log(hash.retreive("There once was a man from nantucket"));
console.log(hash.remove("There once was a man from nantucket"));