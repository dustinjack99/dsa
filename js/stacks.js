class Stack {
    constructor() {
        //make sure class propterties have underscores
        //convention that says the properties are only editable through
        //native methods for the data structre / class
        this._length = 0;
        this._storage = {};
    }

    push(data) {
        this._storage[this._length] = data;
        this._length++;

    }

    pop() {
        const result = this._storage[this._length - 1];
        this._storage[this._length - 1] = undefined;
        this._length--;
        return result;
    }

};

const stack = new Stack();

stack.push("hello there");
console.log(stack._length)
console.log(stack._storage)
stack.push("general kenobi");
console.log(stack._length)
console.log(stack._storage)
stack.pop();
console.log(stack._length)
console.log(stack._storage)