interface StringOnly {
  // name:string,
  // age: string,
  // location : string, 모든 속성 : 값이 같을 때 한번에 지정할 수 있다.
  [key: string]: string;
}
// interface StringOnly { //이건 안된다. 이유는 age는 number며 모든 속성이 string이라는 것은 모순이기 때문이다.
//     age : number
//     [key: string]: string
//   }

// interface StringOnly {
//     age : number
//     [key: string]: string | number, 는 가능하다.
//   }

let objs: StringOnly = {
  name: "kim",
  age: "20",
  location: "seoul",
};

//   interface Css  {
//       "font-size" : {
//           "font-size" : {
//               "font-size" : number
//           }
//       }
//   };

//recursive 타입
interface Css {
  //위 타입을 이렇게 단축시킬 수 있음
  "font-size": Css | number;
}

let css: Css = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};
