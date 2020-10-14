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
