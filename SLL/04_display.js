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

    display() {
        let currentNode = this.head;
        let result = "";
        while (currentNode) {
            result += `${currentNode.value} -> `;
            currentNode = currentNode.next;
        }
        result += "null";
        return result;
    }
}


const lista = new SLL();
let nuevoNodo = lista.addFront(25);
console.log(nuevoNodo);
console.log(lista.head);
nuevoNodo= lista.addFront(50);
console.log(nuevoNodo);
console.log(lista.head);
console.log("Valores");
console.log(lista.display());