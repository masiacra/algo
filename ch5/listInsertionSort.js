"use strict";
exports.__esModule = true;
var SortedList_1 = require("./SortedList");
var size = 10;
var linkArray = new Array(size);
for (var j = 0; j < size; j += 1) {
    var n = Math.random();
    var newLink = new SortedList_1.Link(n);
    linkArray[j] = newLink;
}
console.log("Unsorted Array");
for (var j = 0; j < size; j += 1) {
    console.log(linkArray[j].dData);
}
var theSortedList = new SortedList_1.SortedList();
for (var j = 0; j < size; j += 1) {
    theSortedList.insert(linkArray[j].dData);
}
for (var j = 0; j < size; j += 1) {
    linkArray[j] = theSortedList.remove();
}
console.log("Sorted Array:");
for (var j = 0; j < size; j += 1) {
    console.log(linkArray[j].dData);
}
