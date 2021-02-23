"use strict";
exports.__esModule = true;
var Link = /** @class */ (function () {
    function Link(dd) {
        this.dData = dd;
    }
    Link.prototype.displayLink = function () {
        console.log(this.dData);
    };
    return Link;
}());
exports.Link = Link;
var SortedList = /** @class */ (function () {
    function SortedList() {
        this.first = null;
    }
    SortedList.prototype.insert = function (key) {
        var newLink = new Link(key);
        var previous = null;
        var current = this.first;
        while (current && key > current.dData) {
            previous = current;
            current = current.next;
        }
        if (!previous) {
            this.first = newLink;
        }
        else {
            previous.next = newLink;
        }
        newLink.next = current;
    };
    SortedList.prototype.remove = function () {
        var temp = this.first;
        this.first = this.first.next;
        return temp;
    };
    SortedList.prototype.displayList = function () {
        console.log("List (first --> last):");
        var current = this.first;
        while (current) {
            current.displayLink();
            current = current.next;
        }
    };
    return SortedList;
}());
exports.SortedList = SortedList;
/*
const theSortedList = new SortedList();
theSortedList.insert(20);
theSortedList.insert(40);

theSortedList.displayList();

theSortedList.insert(10);
theSortedList.insert(30);
theSortedList.insert(50);
theSortedList.displayList();
console.log('After removing----');
theSortedList.remove()
theSortedList.displayList();
*/
