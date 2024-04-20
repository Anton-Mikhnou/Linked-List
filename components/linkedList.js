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
        if (this.head === null) {
            return null;
        }
    
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
    
        let temp = this.head;
        let prev = null;
        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }
    
        if (prev) {
            prev.next = null;
            this.tail = prev;
        }
    
        this.#setIndex(); 
    }

    contains(value) {
        if(this.head === null) {
            return null;
        }

        let temp = this.head;
        while(temp !== null) {
            if(value === temp.data) {
                return true;
            } 
            temp = temp.next;
        } 
        return false;
    }

    finde(value) {
        if(this.head === null) {
            return null;
        }

        let temp = this.head;
        while(temp !== null) {
            if(value === temp.data) {
                return temp.index;
            } 
            temp = temp.next;
        } 
        return 'not finde';
    }

    toString() {
        let temp = this.head;
        if(this.head === null) {
            return null;
        }

        let result = '';

        while(temp !== null) {
            result += `(${temp.data}) -> `;
            if(temp.next === null) {
                result += 'null';
            }
            temp = temp.next;
        }
        return result;
    }

    // insertAt(value, index) {
    //     const newNode = new Node(value);
    //     let size = this.size();
        
    //     if(this.head === null) {
    //         this.head = newNode;
    //         this.tail = newNode;
    //         // return this;
    //     }

    //     // let temp = this.head;
    //     if (index === 0) {
    //         const beforeHead = this.head;

    //         this.head = newNode;
    //         this.head.next = beforeHead;
    //         this.#setIndex();
    //         // return this;
    //     } else if(index > size) {
    //         this.tail.next = newNode;
    //         this.tail = newNode;
    //         this.#setIndex();
    //         // return this;
    //     // } else {
    //     //     let temp = this.head;
    //     //     let before;
    //     //     while(temp.index !== index - 1) {
    //     //         before = temp;
    //     //         temp = temp.next;
    //     //     }
    //     //     newNode.next = before.next;

    //     //     before.next = newNode;
    //     //     return this;
    //     // }
    //     }else {
    //         let current = this.head;
    //         let previous = null;
    //         let currentIndex = 0;
    
    //         // Итерируем по списку до достижения нужного индекса
    //         while (current !== null && currentIndex < index) {
    //             previous = current;
    //             current = current.next;
    //             currentIndex++;
    //         }
    
    //         // Вставляем новый узел между previous и current
    //         newNode.next = current;
    //         if (previous) {
    //             previous.next = newNode;
    //         }
    //     }
    //     return this;
    // }
    insertAt(value, index) {
        const newNode = new Node(value);
        let size = this.size();
        
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            if (!this.tail) { // Если список был пуст, то новый узел также становится хвостом
                this.tail = newNode;
            }
        } else if (index >= size) { // Если индекс больше или равен размеру списка, добавляем в конец
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            let current = this.head;
            let previous = null;
            let currentIndex = 0;
    
            // Итерируем по списку до достижения нужного индекса
            while (current !== null && currentIndex < index) {
                previous = current;
                current = current.next;
                currentIndex++;
            }
    
            // Вставляем новый узел между previous и current
            newNode.next = current;
            if (previous) {
                previous.next = newNode;
            }
        }
    
        this.#setIndex(); // Обновляем индексы после вставки
        return this;
    }
}