class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    //complexity 0[1]
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    //Complexity 0[n]
    append(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node;
        }
        this.size++;
    }

    //insert
    insert(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }
        if (index == 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }
    print() {
        if (this.isEmpty()) {
            console.log('List is empty');
        } else {
            let curr = this.head;
            let listvalues = '';
            while (curr) {
                listvalues += `${curr.value}`
                curr = curr.next;

            }
            console.log(listvalues);
        }
    }
}

const list = new Linkedlist();
console.log('List is empty', list.isEmpty());
console.log('List size', list.getSize());
list.print()
list.insert(10, 0)
list.print();
list.insert(11, 0)
list.print()
list.insert(30, 1)
list.print()