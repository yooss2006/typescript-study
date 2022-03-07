export type Carwm = {
  wheel: number;
  model: string;
};
export interface Bikewm {
  wheel: 2;
  model: string;
}

export type Func = (a?: object) => void;

namespace GoodDog {
  export type Dog = string;
}
namespace BadDog {
  export interface Dog {
    name: string;
  }
}

let dog1: GoodDog.Dog = "bark";
let dog2: BadDog.Dog = { name: "paw" };
