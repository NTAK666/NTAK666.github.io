function dis(val) {
    var display = document.getElementById('result');

    display.value += val;
}

function solve() {
    var display = document.getElementById('result');

    let x = display.value;
    let y = eval(x);
    display.value = y;
}

function del() {
    var display = document.getElementById('result');
    display.value = '';
}

function AC() {
    var display = document.getElementById('result');
    display.value = display.value.substr(0, display.value.length - 1);
}

function x2(val) {
    const display = document.getElementById('result');
    display.value = Math.pow(display.value, val)
}

function x3(val) {
    const display = document.getElementById('result');
    display.value = Math.pow(display.value, val)
}

function x4(val) {
    const display = document.getElementById('result');
    display.value = Math.pow(display.value, val)
}

function x5(val) {
    const display = document.getElementById('result');
    display.value = Math.pow(display.value, val)
}

function x6(val) {
    const display = document.getElementById('result');
    display.value = Math.pow(display.value, val)
}

function asinh() {
    const display = document.getElementById('result');
    display.value = Math.asinh(display.value);
}

function asin() {
    const display = document.getElementById('result');
    display.value = Math.asin(display.value);
}

function sinh() {
    const display = document.getElementById('result');
    display.value = Math.sinh(display.value);
}

function sin() {
    const display = document.getElementById('result');
    display.value = Math.sin(display.value * (Math.PI / 180));
}

function cos() {
    const display = document.getElementById('result');
    display.value = Math.cos(display.value * (Math.PI / 180));
}

function acos() {
    const display = document.getElementById('result');
    display.value = Math.acos(display.value);
}

function acosh() {
    const display = document.getElementById('result');
    display.value = Math.acosh(display.value);
}

function tan() {
    const display = document.getElementById('result');
    display.value = Math.tan(display.value * (Math.PI / 180));
}

function tanh() {
    const display = document.getElementById('result');
    display.value = Math.tanh(display.value);
}

function atanh() {
    const display = document.getElementById('result');
    display.value = Math.atanh(display.value);
}

function Log() {
    const display = document.getElementById('result');
    display.value = Math.log10(display.value);
}

function Ln() {
    const display = document.getElementById('result');
    display.value = Math.log(display.value);
}

function e() {
    const display = document.getElementById('result');
    display.value = Math.exp(display.value);
}

function cot() {
    const display = document.getElementById('result');
    display.value = 1 / Math.tan(display.value * (Math.PI / 180));
}

function coth() {
    const display = document.getElementById('result');
    display.value = 1 / Math.tanh(display.value);
}