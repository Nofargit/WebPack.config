"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calc = /** @class */ (function () {
    function Calc() {
        this.n1 = 0;
        this.n2 = 0;
    }
    Calc.prototype.Add = function () {
        return this.n1 + this.n2;
    };
    Calc.prototype.Sub = function () {
        return this.n1 - this.n2;
    };
    Calc.prototype.Mull = function () {
        return this.n1 * this.n2;
    };
    Calc.prototype.div = function () {
        return this.n1 / this.n2;
    };
    Calc.prototype.setData = function (n1, n2) {
        this.n1 = n1;
        this.n2 = n2;
    };
    return Calc;
}());
exports.Calc = Calc;
