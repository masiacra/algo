"use strict";
exports.__esModule = true;
var DoublyLinked_1 = require("./DoublyLinked");
var Deque = /** @class */ (function () {
    function Deque() {
        this.list = new DoublyLinked_1.DoublyLinkedList();
    }
    Deque.prototype.insertLeft = function (elem) {
        this.list.insertFirst(elem);
    };
    Deque.prototype.insertRight = function (elem) {
        this.list.insertLast(elem);
    };
    Deque.prototype.removeLeft = function () {
        return this.list.deleteFirst().dData;
    };
    Deque.prototype.removeRight = function () {
        return this.list.deleteLast().dData;
    };
    Deque.prototype.isEmpty = function () {
        return this.list.isEmpty();
    };
    Deque.prototype.size = function () {
        var current = this.list.getFirst();
        var limit = this.list.getLast();
        var counter = 1;
        while (current !== limit) {
            current = current.next;
            counter += 1;
        }
        return counter;
    };
    Deque.prototype.displayDeque = function () {
        var current = this.list.getFirst();
        var limit = this.list.getLast();
        console.log("Deque is:");
        while (current !== limit) {
            current.displayLink();
            current = current.next;
        }
        current.displayLink();
    };
    return Deque;
}());
var deque = new Deque();
console.log("Is empty?", deque.isEmpty());
deque.insertLeft(1);
deque.insertLeft(2);
deque.insertLeft(3);
deque.insertRight(4);
deque.insertRight(5);
deque.displayDeque();
console.log("size: ", deque.size());
