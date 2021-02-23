"use strict";
exports.__esModule = true;
var firstLastList_1 = require("./firstLastList");
var LinkQueue = /** @class */ (function () {
    function LinkQueue() {
        this.theList = new firstLastList_1.FirstLastList();
    }
    LinkQueue.prototype.isEmpty = function () {
        return this.theList.isEmpty();
    };
    LinkQueue.prototype.insert = function (j) {
        this.theList.insertLast(j);
    };
    LinkQueue.prototype.remove = function () {
        return this.theList.deleteFirst();
    };
    LinkQueue.prototype.displayQueue = function () {
        console.log("Queue (front --> rear)");
        this.theList.displayList();
    };
    return LinkQueue;
}());
exports.LinkQueue = LinkQueue;
var theQueue = new LinkQueue();
theQueue.insert(20);
theQueue.insert(40);
theQueue.displayQueue();
theQueue.insert(60);
theQueue.insert(80);
theQueue.displayQueue();
theQueue.remove();
theQueue.remove();
theQueue.displayQueue();
