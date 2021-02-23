var FactorialApp = /** @class */ (function () {
    function FactorialApp() {
    }
    FactorialApp.factorial = function (n) {
        if (n === 0) {
            return 1;
        }
        else {
            return n * FactorialApp.factorial(n - 1);
        }
    };
    return FactorialApp;
}());
var m = 6;
console.log("For m = " + m + " factorial:", FactorialApp.factorial(m));
