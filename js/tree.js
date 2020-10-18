class Tree {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    insertChild(data) {
        const newTree = new Tree(data);
        this.children.push(newTree);
        return newTree;
    }

    remove(data) {

    }

    //this is a faux traversal
    traverse(tree) {
        console.log(tree.value);
        if(tree.children) {
            for(let i = 0; i < tree.children.length; i++) {
                if(tree.children[i].value) {
                   traverse(tree.children[i]);
                }
            }
        }
    }
}

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(node) {
        if(node.value === this.value) {
            console.log("this value already exists")
        }

        if(!this.left && node.value < this.value) {
            this.left = node;
        } else if(this.left && node.value < this.value) {
            this.left.insert(node);
        }

        if(!this.right && node.value > this.value) {
            this.right = node;
        } else if(this.right && node.value > this.value) {
            this.right.insert(node);
        }

        return; 
    }

    traverse(tree) {
        console.log(tree.value);
        if(tree.left) {
            tree.left.traverse(tree.left);
        } 
        if (tree.right) {
            tree.left.traverse(tree.right);
        } 
    }

    contains(value) {
        if(this.value === value) {
            return true;
        }
        return (this.left && this.left.contains(value) ? true : false) ||
        (this.right && this.right.contains(value) ? true : false);
    }

    //how to count occurances in binary tree
    countLeaves(node) {
        if(node === null) return 0;
        // if there are no children, this node is a leaf
        if(!node.left && !node.right) {
            return 1;
        }

        return (countLeaves(node.left)) +
        (countLeaves(node.right));

    }
}

const bTree = new BinaryTree(8);
bTree.insert(new BinaryTree(2));
bTree.insert(new BinaryTree(18));
bTree.insert(new BinaryTree(1));
bTree.insert(new BinaryTree(5));
bTree.insert(new BinaryTree(3));
bTree.insert(new BinaryTree(8));
console.log(bTree);