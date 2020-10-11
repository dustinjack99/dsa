class Queue {
    constructor() {
        this._storage = {};
        this._length = 0;
        this._headIndex = 0;
        //ask if indices are shifted after dequeue
    }

    enqueue(data) {
        //this moves over all of the empty nodes in front
        this._storage[this._length + this._headIndex] = data;
        this._length++; 
    }

    dequeue() {
        const result = this._storage[this._headIndex];
        delete this._storage[this._headIndex];
        this._headIndex++;
        this._length--;

        if(this._headIndex > this._length) {
            clearQueue();
        }
        return result;
    }

    clearQueue() {
        this.storage = {};
        this._headIndex = 0;
    } 

    peek() {
        return this._storage[this._length + this._headIndex];
    }
}