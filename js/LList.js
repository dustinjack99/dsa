class LList {
    constructor() {
        this._head = null;
        this._tail = null;
    }

    //should be able to make constant time
    insert(data) {
        const newNode = new Node(data);
        let currentNode = this._head;
        if (currentNode === null) {
            this._head = newNode;
            //make sure the tail is referenced as head at instantiation
            this._tail = this._head;
        
        } else {
            //make current tail's {next} as new node
            this._tail._next = newNode;
            //set tail to new node
            this._tail = newNode;
        }

    }

    remove(data) {
        let currentNode = this._head;

        while(currentNode) {
            if(currentNode._next._value === data) {
                const newNext = currentNode._next._next;
                currentNode._next = newNext;
                
            } else if (currentNode._next._value !== data) {
                currentNode = currentNode._next;
            } else if (currentNode._next._value === null) {
                throw console.error("Value not found");
            }
        }
    }

    contains(data) {
        let currentNode = this._head;

        while(currentNode) {
            if(currentNode._next === null) {
                throw console.error("Value not found");

            }

            if(currentNode._next._value === data) {
                return currentNode._next._value;
            } else if (currentNode._next._value !== data) {
                currentNode = currentNode._next;
            } 
        }
    }
}

class Node {
    constructor(data) {
        this._value = data;
        this._next = null;
    }
}

const List = new LList();
List.insert(5);
List.insert(3);
List.insert(10);

console.log(List);
console.log(List.contains(10));

// List.remove(3);
console.log(List);