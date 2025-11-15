// thilina.js - simple JavaScript examples

'use strict';

function greet(name = 'World') {
    return `Hello, ${name}!`;
}

function add(a = 0, b = 0) {
    return a + b;
}

function multiply(a = 1, b = 1) {
    return a * b;
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function demo() {
    console.log(greet('Thilina'));
    console.log('2 + 3 =', add(2, 3));
    console.log('4 * 5 =', multiply(4, 5));
    console.log('Waiting 1 second...');
    console.log('Waiting 3 second...');
    await delay(1000);
    console.log('Done.');
}

if (typeof require !== 'undefined' && require.main === module) {
    demo();
}

module.exports = { greet, add, multiply, delay };