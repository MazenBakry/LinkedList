class Node{
    constructor(value = null, next = null){
        this.value = value;
        this.next = next;
    }
}


class LinkedList{
    constructor(head = null){
        this.head = head;
    }
    getHead(){
        return this.head;
    }
    getTail(){
        if(!this.head){
            return null;
        }

        let tail = this.head;
        while(tail.next !== null){
            tail = tail.next;
        }
        return tail;
    }
    size(){
        let cnt = 0;
        let curr =  this.head;
        while(curr !== null){
            curr = curr.next;
            cnt++;
        }
        return cnt;
    }
    append(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
            return this;
        }
        let tail = this.getTail();
        tail.next = node;
        tail = node;
        tail.next = null;
    }
    prepend(value){
        const node = new Node(value);
        if(!this.head){
            this.head =  node;
            return this;
        }
        node.next = this.head;
        this.head = node;
        return this.head;
    }
    at(idx){
        if(!this.head){
            return null;
        }
        let curr = this.head;
        for(let i = 0; i < idx ; i++){
            curr = curr.next;
        }
        return curr ? curr : null;
    }
    pop(){
        if(!this.head){
            return null;
        }
        if(!this.head.next){
            this.head = null;
            return;
        }
        let pointerBeforeTail = this.at(this.size() - 2);
        pointerBeforeTail.next = null;
        return this.head;
    }
    contains(value){
        if(!this.head){
            return null;
        }
        let curr = this.head;
        while(curr.next !== null){
            if(curr.value === value){
                return true;
            }
            curr = curr.next;
        }
        return curr.value === value ? true : false;
    }
    find(value){
        if (!this.head){ 
            return null;
        }
        let curr = this.head;
        let cnt = 0;
        while (curr.next !== null) {
          if (curr.value === value){
            return cnt;
          }
          curr = curr.next;
          cnt++;
        }
        if (curr.value === value){
            return cnt;
        }
        return null;
    }
    toString(){
        if(!this.head){
            return '(null)';
        }
        let str = '';
        let curr = this.head;
        while(curr.next !== null){
            str = `${str} (${curr.value}) ->`;
            curr = curr.next;
        }
        return `${str} (${curr.value}) -> (null)`;
    }
    insertAt(value,idx){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
            return this.head;
        }
        if(idx === 0){
            this.prepend(value);
            return this.toString();
        }
        if(idx > this.size()-1){
            this.append(value);
            return this.toString();
        }
        let prev = this.at(idx - 1);
        node.next = prev.next;
        prev.next = node;
        return this.toString();
    }
    removeAt(value,idx){
        if (!this.head) {
            return null;
        }
        if (idx === 0) {
          this.head = this.head.next;
          return this.toString();
        }
        if (idx > this.size() - 1) {
            return this.toString();
        }
        let prev = this.at(idx - 1);
        let pointerToRemove = prev.next;
        prev.next = pointerToRemove.next;
        return this.toString();
    }
}


// Test case for append and toString methods
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
console.log(linkedList.toString()); // Output: (1) -> (2) -> (3) -> (null)

// Test case for prepend and toString methods
const linkedList2 = new LinkedList();
linkedList2.prepend(3);
linkedList2.prepend(2);
linkedList2.prepend(1);
console.log(linkedList2.toString()); // Output: (1) -> (2) -> (3) -> (null)

// Test case for size method
console.log(linkedList.size()); // Output: 3

// Test case for getHead method
const headValue = linkedList.getHead().value;
console.log(headValue); // Output: 1

// Test case for getTail method
const tailValue = linkedList.getTail().value;
console.log(tailValue); // Output: 3

// Test case for at method
const thirdValue = linkedList.at(2).value;
console.log(thirdValue); // Output: 3

// Test case for pop method
linkedList.pop();
console.log(linkedList.toString()); // Output: (1) -> (2) -> (null)

// Test case for contains method
console.log(linkedList.contains(2)); // Output: true
console.log(linkedList.contains(4)); // Output: false

// Test case for find method
console.log(linkedList.find(2)); // Output: 1
console.log(linkedList.find(4)); // Output: null

// Test case for insertAt method
linkedList.insertAt(4, 1);
console.log(linkedList.toString()); // Output: (1) -> (4) -> (2) -> (null)

// Test case for removeAt method
linkedList.removeAt(1);
console.log(linkedList.toString()); // Output: (1) -> (2) -> (null)