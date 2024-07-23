"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math"); // именнованные импорты, лючше их использовать
const math_2 = __importDefault(require("./math")); // название для export default может быть любым
const sum_1 = require("./math/sum");
const sub_1 = require("./math/sub");
const mul_1 = require("./math/mul");
const div_1 = require("./math/div");
(0, math_1.sum)(1, 2);
(0, math_1.sub)(1, 2);
(0, math_1.mul)(1, 2);
(0, math_1.div)(1, 2);
(0, math_2.default)();
(0, sum_1.sum1)(1, 2);
(0, sub_1.sub1)(1, 2);
(0, mul_1.mul1)(1, 2);
(0, div_1.div1)(1, 2);
