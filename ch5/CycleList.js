"use strict";
exports.__esModule = true;
var Link = /** @class */ (function () {
    function Link(dd) {
        this.dData = dd;
        this.next = null;
    }
    Link.prototype.getData = function () {
        return this.dData;
    };
    Link.prototype.displayLink = function () {
        console.log(this.dData);
    };
    return Link;
}());
exports.Link = Link;
var CycleList = /** @class */ (function () {
    function CycleList() {
        this.current = null;
        this.size = 0;
    }
    CycleList.prototype.insert = function (j) {
        var newLink = new Link(j);
        if (this.size === 0) {
            this.current = newLink;
            newLink.next = newLink;
        }
        else if (this.size === 1) {
            this.current.next = newLink;
            newLink.next = this.current;
        }
        else {
            var temp = this.current.next;
            this.current.next = newLink;
            newLink.next = temp;
        }
        this.size += 1;
    };
    CycleList.prototype.remove = function () {
        var value = null;
        if (this.size === 0) {
            console.error("Can't remove from empty list");
        }
        else if (this.size === 1) {
            value = this.current;
            this.current = null;
        }
        else {
            value = this.current.next;
            this.current.next = value.next;
        }
        this.size -= 1;
        return value;
    };
    CycleList.prototype.find = function (key) {
        var result = null;
        if (this.size === 0) {
            console.error("Can't find key in empty list");
        }
        else {
            var current = this.current;
            while (current.getData() !== key) {
                current = current.next;
                if (current = this.current) {
                    break;
                }
            }
            result = current.getData() === key ? current : null;
        }
        return result;
    };
    CycleList.prototype.step = function () {
        if (this.size === 0) {
            console.error("CycleList is empty");
        }
        else {
            this.current = this.current.next;
        }
    };
    CycleList.prototype.displayList = function () {
        if (this.size === 0) {
            console.log("List is empty");
        }
        else {
            console.log("List: ");
            this.current.displayLink();
            var current = this.current.next;
            while (current !== this.current) {
                current.displayLink();
                current = current.next;
            }
        }
    };
    CycleList.prototype.getSize = function () {
        return this.size;
    };
    CycleList.prototype.getCurrent = function () {
        return this.current;
    };
    return CycleList;
}());
exports.CycleList = CycleList;
/*
const list = new CycleList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
console.log("Before removing");
list.displayList();

list.remove();


console.log("After 1");

list.displayList();
list.remove();


console.log("After 2");

list.displayList();
list.remove();


console.log("After 3");

list.displayList();
list.remove();


console.log("After 4");

list.displayList();
*/
