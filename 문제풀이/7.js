var cutZero = function (a) {
    if (a[0] === "0") {
        return a.slice(1, a.length);
    }
    else {
        return a;
    }
};
var removeDash = function (a) {
    var x = [];
    a.split("").forEach(function (data) {
        if (data !== "-") {
            x.push(data);
        }
    });
    return Number(x.join(""));
};
var common = function (a, b, c) {
    return c(b(a));
};
console.log(common("010-1111-2222", cutZero, removeDash));
