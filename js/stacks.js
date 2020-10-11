class Stack {
    constructor() {
        //make sure class propterties have underscores
        //convention that says the properties are only editable through
        //native methods for the data structre / class
        this._length = 0;
        this._storage = {};
    }

    push(data) {
        if(data === undefined || null) {
            throw console.error("You did not push a value to the stack.");
        }
        this._storage[this._length] = data;
        this._length++;

    }

    pop() {
        //edge case for popping empty stack
        if(this._length === 0) {
            throw console.error("Nothing in the stack.")
        }

        const result = this._storage[this._length - 1];
        this._storage[this._length - 1] = undefined;
        this._length--;
        return result;
    }

    peek() {
        //edge case for peeking empty stack
        if(this._length === 0) {
            throw console.error("Nothing in the stack.");
        }

        return this._storage[this._length - 1];
    }
};

const stack = new Stack();

stack.push("hello there");
console.log(stack._length)
console.log(stack._storage)
stack.push("general kenobi");
console.log(stack._length)
console.log(stack._storage)
console.log(stack.peek());
console.log(stack.pop());
console.log(stack._length)
console.log(stack._storage)

//edge cases
//what if user pushes empty value?