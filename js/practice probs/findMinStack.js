//Find the minimum value of a stack
//Must be O{1} lookup time.

class Stack {
    constructor() {
        this.store = {},
        this.length = 0,
        this.min = Infinity
    }

    push(val) {
        this.store[this.length] = val;
        this.length++;

        if (val < this.min) {
            this.min = val;
        }
    }

    pop() {
        const poppedVal = this.store[this.length - 1];
        delete this.store[this.length - 1];
        this.length--;
        if(poppedVal === this.min) {
            this.resetMin();
        }
        
    }

    getMin() {
        return this.min; 
    }

    resetMin() {
        const vals = Object.keys(this.store);
        this.min = Infinity;
        
        vals.forEach(val => {
            if(this.store[val] < this.min) {
                this.min = this.store[val];
            }
        });
    }
}

const stack = new Stack();

stack.push(9);
stack.push(4);
stack.push(5);
stack.push(7);
stack.push(8);
stack.push(1);
stack.push(2);

stack.pop();
stack.pop();
console.log(stack);
console.log(stack.getMin());
