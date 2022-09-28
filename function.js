function sum(a, b) {
    return a + b;
}
function sum2(a, b) {
    return a + b;
}
function sum3(a, b) {
    if (b === void 0) { b = '100'; }
    return a + b;
}
function sum4(a) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    var totalOfNums = 0;
    for (var key in nums) {
        totalOfNums += nums[key];
    }
    return a + totalOfNums;
}
