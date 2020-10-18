//DFS
//Goes to deepest level

//iterative approach
//for recursive stack, the recursive calls ARE your stack
function depthFirstTraversal(startingNode) {
    const nodeStack = [];
    const visited = {};

    nodeStack.push(startingNode);
    visited[startingNode] = true;

    while(nodeStack.length) {
        const current = nodeStack.pop();
        const neighbors = this.adjList[current];

        neighbors.forEach(neighbor => {
            if(!visited[neighbor]) {
                nodeStack.push(neigbor);
                visited[neighbor = true]; 
            }
        });
    }
}

//BFS
//Goes across all top level
function breadthFirstTraversal(startingNode) {
    const nodeQueue = [];
    const visited = {};

    nodeQueue.push(startingNode);
    visited[startingNode] = true;
    
    while (nodeQueue.length) {
        //implement a linked list to optimize
        //remove from the head in constant time
        const current = nodeQueue.shift();
        const neighbors = this.adjList[current];

        neighbors.forEach(neighbor => {
            if(!visited[neighbor]) {
                nodeQueue.push(neighbor);
                visited[neighbor] = true;
            }
        })
    }
}

function binarySearch() {
    
}


//Difference?
//DFS uses a stack
//BFS uses a queue