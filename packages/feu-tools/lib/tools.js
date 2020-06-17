'use strict';

/**
 * 取和
 * @param a
 * @param b
 * @returns {*}
 */
function add(a, b) {
    console.log("tools库，调用函数add,入参：%d, %d",a ,b)
    return a + b;
}

/**
 * 取最小值
 * @param a
 * @param b
 * @returns {number}
 */
function min(a, b) {
    console.log("tools库，调用函数min,入参：%d, %d",a ,b)
    return Math.min(a, b);
}

module.exports = { add, min };