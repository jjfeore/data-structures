'use strict';

function Node(val, next) {
  this.val = val;
  this.next = next ? next : null;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.push = function(val) {
  this.head = new Node(val, this.head);
};
