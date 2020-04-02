var displayColor = function (message) {
    // for(let i in colors)
    // {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    //     console.log(colors[i]);
    // }
    console.log(arguments.length);
    console.log(colors);
};
displayColor('Red');
displayColor('Red', 'Green');
displayColor('Red', 'Green', 'Blue');
//# sourceMappingURL=lesson11.js.map