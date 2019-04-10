var numArr = [1, 5 ,8, 9, 11, 13, 15];

// function binarySearchTree(arr, targetNum){
//   if (arr.includes(targetNum)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// binary Search
function binarySearchTree(arr, targetNum) {
  let left = 0
  let right = arr.length - 1
  
  while (left <= right){
    let middle = Math.floor((right + left) / 2)
    if (arr[middle] === targetNum) {
      return middle
    } else {
      if (arr[middle] > targetNum) right = middle - 1
      else left = middle + 1
    }
  }
  return -1
}

binarySearchTree(numArr, 5)
console.log(binarySearchTree(numArr, 5));


//Tree and depth first search

//create class node

class Node {
  constructor(value){
    this.value = value;
    this.children = []
  }
  
  addNode(value){
    this.children.push(new Node(value))
  }
}


function depthFirstSearchPre (node, callback) {
  callback(node.value)
  node.children.forEach(child => depthFirstSearch(child, callback)) 
}

function depthFirstSearchPost (node, callback) {
  node.children.forEach(child => depthFirstSearchPost(child, callback)) 
  callback(node.value)
}


function breathFirstSearch (node, callback) {
  let queue = [node]
  while (queue.length) {
    let currentNode = queue.shift()
    callback(currentNode.value)
    queue.push(...currentNode.children)
  }
  
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');
var g = new Node('g');
var h = new Node('h');
var i = new Node('i');
var j = new Node('j');
var k = new Node('k');
var l = new Node('l');
var m = new Node('m');

a.children.push(b, c, d);
b.children.push(e);
e.children.push(k, l);
c.children.push(f, g, h);
h.children.push(m);
d.children.push(i, j);

const logger = (node) =>{
  console.log(node)
}

depthFirstSearchPost(a, logger)

