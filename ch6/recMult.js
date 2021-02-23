var RecMultApp = /** @class */ (function () {
    function RecMultApp() {
    }
    RecMultApp.mult = function (x, y) {
        if (x === 1) {
            return y;
        }
        if (y === 1) {
            return x;
        }
        return y + RecMultApp.mult(x - 1, y);
    };
    return RecMultApp;
}());
console.log(RecMultApp.mult(4, 3));
console.log(RecMultApp.mult(6, 6));
