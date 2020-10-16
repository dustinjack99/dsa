class Graph {
    constructor() {
        this.adjList = {};
    }

    addEdge(node1, node2) {

        this.adjList[node1.value].edges.push(node2);
        this.adjList[node2.value].edges.push(node1);
    }

    removeEdge(node1, node2) {
        const v1Index = this.adjList[node1.value].indexOf(node2);
        const v2Index = this.adjList[node2.value].indexOf(node1);

        this.adjList[node1].splice(v2Index, 1);
        this.adjList[node2].splice(v1Index, 1);
    }

    addNode(node) {
        this.adjList[node.value] = [];
    }

    removeNode(node) {
        delete this.adjList[node.value];
        const nodes = Object.keys(this.adjList);

        nodes.forEach(cNode => {
            const edges = this.adjList[cNode].edges;
            const index = edges.indexOf(node);
            if(index > -1) {
                edges.splice(index, 1);
            }
        })
    }
}

const adjList = new Graph();
const node1 = {value: 1};
const node2 = {value: 2};
adjList.addNode(node1);
adjList.addNode(node2);

adjList.addEdge(node1, node2)