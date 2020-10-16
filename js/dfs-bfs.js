//DFS
//Goes to deepest level

//iterative approach
//for recursive stack, the recursive calls ARE your stack
function depthFirstTraversal(startingNode, func = console.log) {
    const nodeStack = [];
    const visited = {};

    nodeStack.push(startingNode);
    visited[startingNode] = true;

    while(nodeStack.length) {
        const current = nodeStack.pop();

        const neighbors = this.adjList[current];
        func(current);

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
function breadthFirstTraversal(startingNode, func = console.log) {
    const nodeQueue = [];
    const visited = {};

    nodeQueue.push(startingNode);
    visited[startingNode] = true;
    
    while (nodeQueue.length) {
        const current = nodeQueue.shift();
        const neighbors = this.adjList[current];
        func(current);

        neighbors.forEach(neighbor => {
            if(!visited[neighbor]) {
                nodeQueue.push(neighbor);
                visited[neighbor] = true;
            }
        })
    }
}


//Difference?
//DFS uses a stack
//BFS uses a queue