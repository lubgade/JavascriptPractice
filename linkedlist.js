// Find middle element of a linked list by using 2 pointers

function Node(data, next){
    this.data = data;
    this.next = next;
}

// setting up the linked list n5->n4->n3->n2->n1->null

var n1 = new Node("Hello", null);   
var n2 = new Node("21", n1); 
var n3 = new Node("Green", n2); 
var n4 = new Node("Blue", n3); 
var n5 = new Node("Daniel", n4); 

var head = n5;

var fastptr = head;
var slowptr = head;

while(fastptr.next != null && fastptr.next.next != null){
    fastptr = fastptr.next.next;
    slowptr = slowptr.next;
}

console.log(slowptr.data);

