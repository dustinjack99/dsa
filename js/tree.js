class Tree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
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
        console.log(tree.name);
        if(tree.children) {
            for(let i = 0; i < tree.children.length; i++) {
                if(tree.children[i].name) {
                   traverse(tree.children[i]);
                }
            }
        }
    }
}

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if(value < this.value) {

        }
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
