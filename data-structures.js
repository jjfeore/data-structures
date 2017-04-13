'use strict';

function Node(val, next) {
  this.val = val;
  this.next = next ? next : null;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.push = function(val) {
  this.head = new Node(val, this.head);
  this.length++;
};

LinkedList.prototype.display = function(x) {
  if (x && x.next != null) return `[${x.val}] -> ${this.display(x.next)}`;
  else if (x) return `[${x.val}]`;
  return `[${this.head.val}] -> ${this.display(this.head.next)}`;
}
