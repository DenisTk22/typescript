"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = require("./math"); // именнованные импорты, лючше их использовать
var math_2 = require("./math"); // название для export default может быть любым
var sum_1 = require("./math/sum");
var sub_1 = require("./math/sub");
var mul_1 = require("./math/mul");
var div_1 = require("./math/div");
(0, math_1.sum)(1, 2);
(0, math_1.sub)(1, 2);
(0, math_1.mul)(1, 2);
(0, math_1.div)(1, 2);
(0, math_2.default)();
(0, sum_1.sum1)(1, 2);
(0, sub_1.sub1)(1, 2);
(0, mul_1.mul1)(1, 2);
(0, div_1.div1)(1, 2);
