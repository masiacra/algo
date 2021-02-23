var TriangleApp = /** @class */ (function () {
    function TriangleApp() {
    }
    TriangleApp.triangle = function (n) {
        console.log("Entering: n=", n);
        if (n === 1) {
            console.log("Returning 1");
            return 1;
        }
        else {
            var temp = n + TriangleApp.triangle(n - 1);
            console.log("Returning ", temp);
            return temp;
        }
    };
    return TriangleApp;
}());
console.log("Triangle for 5 = ", TriangleApp.triangle(5));
