function LinkedList() {
	this.head = null;
	this.tail = null;
  }
  
  function Node(value, next, prev) {
	this.value = value;
	this.next = next;
	this.prev = prev;
  }
  
  LinkedList.prototype.addToHead = function(value) {
	const newNode = new Node(value, this.head, null);
	if (this.head) {
	  this.head.prev = newNode;
	} else {
	  this.tail = newNode;
	}
	this.head = newNode;
  }; // end of addToHead
  
  LinkedList.prototype.addToTail = function(value) {
	const newNode = new Node(value, null, this.tail);
  
	if (this.tail) {
	  this.tail.next = newNode;
	} else {
	  this.head = newNode;
	}
	this.tail = newNode;
  }; // end of addToTail
  
  LinkedList.prototype.removeHead = function() {
	if (!this.head) return null;
  
	let value = this.head.value;
	this.head = this.head.next;
  
	if (this.head) {
	  this.head.prev = null;
	} else {
	  // 아무것도 없으니까 tail 도 null 처리
	  this.tail = null;
	}
  
	return value;
  }; // end of removeHead
  
  LinkedList.prototype.removeTail = function() {
	if (!this.tail) return null;
  
	let value = this.tail.value;
	this.tail = this.tail.prev;
  
	if (this.tail) {
	  this.tail.next = null;
	} else {
	  this.tail = null;
	}
  
	return value;
  }; // end of removeTail
  
  LinkedList.prototype.search = function(srchVal) {
	let crntNode = this.head;
	while (crntNode) {
	  if (crntNode.value == srchVal) return crntNode;
	  crntNode = crntNode.next;
	}
	return null;
  }; // end of search
  
  LinkedList.prototype.removeAt = function(val) {
	let chkNode = this.search(val);
	let prevNode = chkNode.prev;
	let nextNode = chkNode.next;
  
	prevNode.next = nextNode;
	nextNode.prev = prevNode;
  }; // end of removeAT
  
  export { LinkedList, Node };
  