"use strict";
exports.__esModule = true;
var CycleList_1 = require("./CycleList");
function solve(numOfPeople, period) {
    var list = new CycleList_1.CycleList;
    for (var i = 1; i <= numOfPeople; i += 1) {
        list.insert(i);
        list.step();
    }
    console.log("Cycle");
    list.displayList();
    while (list.getSize() > 1) {
        for (var i = 1; i < period; i += 1) {
            list.step();
        }
        list.remove();
        console.log("After removing");
        list.displayList();
    }
}
solve(10, 2);
