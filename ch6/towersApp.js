var TowersApp = /** @class */ (function () {
    function TowersApp() {
    }
    TowersApp.doTowers = function (topN, from, inter, to) {
        if (topN === 1) {
            console.log("Disk 1 from " + from + " to " + to);
        }
        else {
            TowersApp.doTowers(topN - 1, from, to, inter);
            console.log("Disk " + topN + " from " + from + " to " + to);
            TowersApp.doTowers(topN - 1, inter, from, to);
        }
    };
    TowersApp.nDisks = 3;
    return TowersApp;
}());
TowersApp.doTowers(TowersApp.nDisks, 'A', 'B', 'C');
