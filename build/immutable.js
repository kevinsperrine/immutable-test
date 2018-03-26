"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var arrayData = [
    ['ghi789', { id: 'ghi789', name: 'ghi789' }],
    ['def456', { id: 'def456', name: 'def456' }],
    ['abc123', { id: 'abc123', name: 'abc123' }]
];
var mapOne = immutable_1.Map(arrayData);
var objectData = {
    ghi789: { id: 'ghi789', name: 'ghi789' },
    def456: { id: 'def456', name: 'def456' },
    abc123: { id: 'abc123', name: 'abc123' }
};
var mapTwo = immutable_1.Map(objectData);
//# sourceMappingURL=immutable.js.map