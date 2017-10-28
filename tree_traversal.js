function Node(data){
    this.data = data;
    this.left = null;
    this.right = null;
}

// create nodes
var root = new Node('A');
var n1 = new Node('B');
var n2 = new Node('C');
var n3 = new Node('D');
var n4 = new Node('E');

// setup children
root.left = n1;
root.right = n2;
n1.left = n3;
n1.right = n4;


// 1.Return root
// 2. Traverse left recursively
// 3. Traverse right recursively
function preorder(root, nodes){
    nodes.push(root.data);
    if(root && root.left)
        preorder(root.left, nodes);
    if(root && root.right)
        preorder(root.right, nodes);
    return nodes;
}

console.log(preorder(root, []));


// 1. Traverse left recursively
// 2. Return root
// 3. Traverse right recursively
function inorder(root, nodes){
    if(root && root.left)
        inorder(root.left, nodes);
    nodes.push(root.data);
    if(root && root.right)
        inorder(root.right, nodes);
    return nodes;    
}

console.log(inorder(root, []));


// 1. Traverse left recursively
// 2.Traverse right recursively
//3. Return root
function postorder(root, nodes){
    if(root && root.left)
        postorder(root.left, nodes);
    if(root && root.right)
        postorder(root.right, nodes);
    nodes.push(root.data);
    return nodes;
}

console.log(postorder(root, []));

function levelorder(root, nodes){
    var queue = [root];
    //console.log(queue);
    while(queue.length > 0){
        var n = queue.shift();
        nodes.push(n.data);
        if(n.left != null)
            queue.push(n.left);
        if(n.right != null)
            queue.push(n.right);
    }
    return nodes;
}

console.log(levelorder(root, []));