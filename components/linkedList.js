import Node from "../components/node";

export default class LinkedList {
    constructor (head = null, tail = null) {
        this.head = head;
        this.tail = tail;
    }

    append(value) {
        const newNode = new Node(value);

        if(!this.head || !this.tail){
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        this.tail.next = newNode;

        this.tail = newNode;
        this.#setIndex();
        return this;
    }

    #setIndex() {
        let temp = this.head;
        let number = 0;
        while(temp !== null) {
            temp.index = number;
            number++;
            temp = temp.next;
        }
    }

    prepend(value) {
        const newNode = new Node(value);

        if(!this.head || !this.tail){
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        const beforeHead = this.head;

        this.head = newNode;
        this.head.next = beforeHead;
        this.#setIndex();

        return this;
    }

    size() {
        let temp = this.head;
        let count = 0;
        while(temp !== null) {
            count++;
            temp = temp.next;
        }               
        return count;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    at(index) {
        let temp = this.head;
        while(temp !== null) {
            if(temp.index === index) {
                return temp;
            }
            temp = temp.next;
        }
    }

    pop() {
        while(temp.index !== null) {
            if(temp. index) {
                return temp;
            }
            temp = temp.next;
        }
    }
}