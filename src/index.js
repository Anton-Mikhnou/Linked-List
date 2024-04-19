import LinkedList from "../components/linkedList";

let list = new LinkedList();

// list.setIndex()
list.append('a').append('b').append('c').append('d');
list.prepend('e');
console.log(list.getHead());
console.log('tail',list.getTail());
console.log(list.size());
console.log('list',list);
console.log(list.at(0));