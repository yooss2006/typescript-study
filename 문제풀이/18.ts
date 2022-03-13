type Agez<T> = T extends [string, ...any] ? T[0] : unknown;

let age11: Agez<[string, number]>;
let age22: Agez<[boolean, number]>;

type 타입뽑기<T> = T extends (x: infer R) => any ? R : any;
type av = 타입뽑기<(x: number) => void>;
