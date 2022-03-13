// interface StringOnly { //이건 안된다. 이유는 age는 number며 모든 속성이 string이라는 것은 모순이기 때문이다.
//     age : number
//     [key: string]: string
//   }
// interface StringOnly {
//     age : number
//     [key: string]: string | number, 는 가능하다.
//   }
var objs = {
    name: "kim",
    age: "20",
    location: "seoul",
};
var css = {
    "font-size": {
        "font-size": {
            "font-size": 14,
        },
    },
};
