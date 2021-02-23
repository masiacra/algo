"use strict";
exports.__esModule = true;
var Link_1 = require("./Link");
var FirstLastList = /** @class */ (function () {
    function FirstLastList() {
        this.first = null;
        this.last = null;
    }
    FirstLastList.prototype.isEmpty = function () {
        return !Boolean(this.first);
    };
    FirstLastList.prototype.insertFirst = function (dd) {
        var newLink = new Link_1.Link(dd, null);
        if (this.isEmpty()) {
            this.last = newLink;
        }
        newLink.next = this.first;
        this.first = newLink;
    };
    FirstLastList.prototype.insertLast = function (dd) {
        var newLink = new Link_1.Link(dd, null);
        if (this.isEmpty()) {
            this.first = newLink;
        }
        else {
            this.last.next = newLink;
        }
        this.last = newLink;
    };
    FirstLastList.prototype.deleteFirst = function () {
        var temp = this.first.dData;
        if (!this.first.next) {
            this.last = null;
        }
        this.first = this.first.next;
        return temp;
    };
    FirstLastList.prototype.displayList = function () {
        // console.log("List (first --> last)");
        var current = this.first;
        while (current) {
            current.displayLink();
            current = current.next;
        }
    };
    return FirstLastList;
}());
exports.FirstLastList = FirstLastList;
/*
const theList = new FirstLastList<number>();
theList.insertFirst(22);
theList.insertFirst(44);
theList.insertFirst(66);

theList.insertLast(11);
theList.insertLast(33);
theList.insertLast(55);

theList.displayList();

theList.deleteFirst();
theList.deleteFirst();
console.log("After removing");
theList.displayList();
*/
