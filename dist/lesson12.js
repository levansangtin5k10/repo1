var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var displayColorSpread = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(arguments.length);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var messageSpread = "Hello";
var colors = ['Red', 'Green', 'Blue'];
displayColorSpread.apply(void 0, __spreadArrays([messageSpread], colors));
//# sourceMappingURL=lesson12.js.map