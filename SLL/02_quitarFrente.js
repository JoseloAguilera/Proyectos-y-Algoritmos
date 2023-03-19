class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = new Node(value); 
        newNode.next = this.head; 
        this.head = newNode; 
        return newNode; 
    }

    removeFront() {
        if (!this.head) {
            return null;
        }
        const newHead = this.head.next;
        this.head = newHead;
        return this.head;
    }

}


const lista = new SLL();
let nuevoNodo = lista.addFront(25);
console.log(nuevoNodo);
console.log(lista.head);
nuevoNodo= lista.addFront(50);
console.log(nuevoNodo);
console.log(lista.head);
let removeFront= lista.removeFront();
console.log(removeFront);
console.log(lista.head);