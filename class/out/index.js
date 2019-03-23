"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calc_js_1 = require("./calc.js");
var btn = document.querySelector("#newData");
if (btn) {
    btn.addEventListener('click', setNewData);
}
var a, b;
var o;
function setNewData() {
    o = new calc_js_1.Calc();
    a = parseInt(document.querySelector("#n1").value);
    b = parseInt(document.querySelector("#n2").value);
    o.setData(a, b);
    showData();
}
function showData() {
    var div = document.querySelector("#result");
    if (div) {
        div.innerHTML += "<pre>";
        div.innerHTML += o.Add().toString() + "<br>";
        div.innerHTML += o.Sub().toString() + "<br>";
        div.innerHTML += o.Mull().toString() + "<br>";
        div.innerHTML += o.div().toString() + "<br>";
        div.innerHTML += "OK ";
        div.innerHTML += "</pre>";
    }
}
