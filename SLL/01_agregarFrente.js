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

}


const lista = new SLL();
let nuevoNodo = lista.addFront(25);
console.log(nuevoNodo);
console.log(lista.head);
nuevoNodo= lista.addFront(50);
console.log(nuevoNodo);
console.log(lista.head);