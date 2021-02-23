"use strict";
exports.__esModule = true;
var Link_1 = require("./Link");
var LinkList = /** @class */ (function () {
    function LinkList() {
        this.first = null;
    }
    LinkList.prototype.isEmpty = function () {
        return !Boolean(this.first);
    };
    LinkList.prototype.insertFirst = function (id, dd) {
        var link = new Link_1.Link(id, dd);
        link.next = this.first;
        this.first = link;
    };
    LinkList.prototype.deleteFirst = function () {
        var link = this.first;
        this.first = this.first.next;
        return link;
    };
    LinkList.prototype.displayList = function () {
        // console.log("List (first --> last): ");
        var current = this.first;
        while (current) {
            current.displayLink();
            current = current.next;
        }
    };
    LinkList.prototype.find = function (key) {
        var current = this.first;
        while (current.iData !== key) {
            if (!current.next) {
                return null;
            }
            else {
                current = current.next;
            }
        }
        return current;
    };
    LinkList.prototype.deleteLink = function (key) {
        var current = this.first;
        var previous = this.first;
        while (current.iData !== key) {
            if (!current.next) {
                return null;
            }
            else {
                previous = current;
                current = current.next;
            }
        }
        if (current === this.first) {
            this.first = current.next;
        }
        else {
            previous.next = current.next;
        }
        return current;
    };
    return LinkList;
}());
exports.LinkList = LinkList;
var theList = new LinkList();
theList.insertFirst(22, 2.99);
theList.insertFirst(44, 4.99);
theList.insertFirst(66, 6.99);
theList.insertFirst(88, 8.99);
theList.displayList();
console.log('------');
var f = theList.find(44);
if (!!f) {
    console.log("Found link with key " + f.iData);
}
else {
    console.log("Can't find link");
}
var d = theList.deleteLink(66);
if (d) {
    console.log("Deleted link with key " + d.iData);
}
else {
    console.log("Can't delete link");
}
console.log("After transformation");
theList.displayList();
