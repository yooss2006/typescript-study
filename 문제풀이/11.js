function 최댓값() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var x = a[0];
    for (var i = 1; i < a.length; i++) {
        if (x < a[i]) {
            x = a[i];
        }
    }
    return x;
}
console.log(최댓값(6, 3, 7, 2));
function 함수님(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
함수님({ user: "kim", comment: [3, 5, 4], admin: false });
function 함수형님(_a) {
    var age = _a[0], name = _a[1], isFood = _a[2];
    console.log(age, name, isFood);
}
함수형님([40, "wine", false]);
