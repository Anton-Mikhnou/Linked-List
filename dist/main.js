(()=>{"use strict";class t{constructor(t=null,e=null,i){this.data=t,this.next=e,this.index=i}}let e=new class{constructor(t=null,e=null){this.head=t,this.tail=e}append(e){const i=new t(e);return this.head&&this.tail?(this.tail.next=i,this.tail=i,this.#t(),this):(this.head=i,this.tail=i,this)}#t(){let t=this.head,e=0;for(;null!==t;)t.index=e,e++,t=t.next}prepend(e){const i=new t(e);if(!this.head||!this.tail)return this.head=i,this.tail=i,this;const n=this.head;return this.head=i,this.head.next=n,this.#t(),this}size(){let t=this.head,e=0;for(;null!==t;)e++,t=t.next;return e}getHead(){return this.head}getTail(){return this.tail}at(t){let e=this.head;for(;null!==e;){if(e.index===t)return e;e=e.next}}pop(){for(;null!==temp.index;){if(temp.index)return temp;temp=temp.next}}};e.append("a").append("b").append("c").append("d"),e.prepend("e"),console.log(e.getHead()),console.log("tail",e.getTail()),console.log(e.size()),console.log("list",e),console.log(e.at(0))})();