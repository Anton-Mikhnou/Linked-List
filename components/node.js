export default class Node {
    constructor(data = null, next = null, index) {
        this.data = data;
        this.next = next;
        this.index = index;
    }
}