"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const greeting_1 = require("../src/greeting");
describe('Test example', () => {
    it('Greeting with a given name', () => {
        chai_1.assert.equal((0, greeting_1.greeting)('Bob'), 'Hello, Bob!');
    });
    it('Greeting without name', () => {
        chai_1.assert.equal((0, greeting_1.greeting)(), 'Hello, Sir!');
    });
});
