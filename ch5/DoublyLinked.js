"use strict";
exports.__esModule = true;
var Link = /** @class */ (function () {
    function Link(d) {
        this.dData = d;
    }
    Link.prototype.displayLink = function () {
        console.log(this.dData);
    };
    return Link;
}());
exports.Link = Link;
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.first = null;
        this.last = null;
    }
    DoublyLinkedList.prototype.isEmpty = function () {
        return !this.first;
    };
    DoublyLinkedList.prototype.insertFirst = function (dd) {
        var newLink = new Link(dd);
        if (this.isEmpty()) {
            this.last = newLink;
        }
        else {
            this.first.previous = newLink;
        }
        newLink.next = this.first;
        this.first = newLink;
    };
    DoublyLinkedList.prototype.insertLast = function (dd) {
        var newLink = new Link(dd);
        if (this.isEmpty()) {
            this.first = newLink;
        }
        else {
            this.last.next = newLink;
            newLink.previous = this.last;
        }
        this.last = newLink;
    };
    DoublyLinkedList.prototype.deleteFirst = function () {
        var temp = this.first;
        if (!this.first.next) {
            this.last = null;
        }
        else {
            this.first.next.previous = null;
        }
        this.first = this.first.next;
        return temp;
    };
    DoublyLinkedList.prototype.deleteLast = function () {
        var temp = this.last;
        if (!this.first.next) {
            this.first = null;
        }
        else {
            this.last.previous.next = null;
        }
        this.last = this.last.previous;
        return temp;
    };
    DoublyLinkedList.prototype.insertAfter = function (key, dd) {
        var current = this.first;
        while (current.dData !== key) {
            current = current.next;
            if (!current) {
                return false;
            }
        }
        var newLink = new Link(dd);
        if (current === this.last) {
            newLink.next = null;
            this.last = newLink;
        }
        else {
            newLink.next = current.next;
            current.next.previous = newLink;
        }
        newLink.previous = current;
        current.next = newLink;
        return true;
    };
    DoublyLinkedList.prototype.deleteKey = function (key) {
        var current = this.first;
        while (current.dData !== key) {
            current = current.next;
            if (!current) {
                return null;
            }
        }
        if (current === this.first) {
            this.first = current.next;
        }
        else {
            current.previous.next = current.next;
        }
        if (current === this.last) {
            this.last = current.previous;
        }
        else {
            current.next.previous = current.previous;
        }
        return current;
    };
    DoublyLinkedList.prototype.displayForward = function () {
        console.log("List (first --> last)");
        var current = this.first;
        while (current) {
            current.displayLink();
            current = current.next;
        }
    };
    DoublyLinkedList.prototype.displayBackward = function () {
        console.log("List (last --> first)");
        var current = this.last;
        while (current) {
            current.displayLink();
            current = current.previous;
        }
    };
    DoublyLinkedList.prototype.getFirst = function () {
        return this.first;
    };
    DoublyLinkedList.prototype.getLast = function () {
        return this.last;
    };
    return DoublyLinkedList;
}());
exports.DoublyLinkedList = DoublyLinkedList;
/*
const theList = new DoublyLinkedList();

theList.insertFirst(22);
theList.insertFirst(44);
theList.insertFirst(66);

theList.insertLast(11);
theList.insertLast(33);
theList.insertLast(55);

theList.displayForward();
theList.displayBackward();

theList.deleteFirst();
theList.deleteLast();
theList.deleteKey(11);

console.log('----');

theList.displayForward();

theList.insertAfter(22, 77);
theList.insertAfter(33, 88);

theList.displayForward();
*/
