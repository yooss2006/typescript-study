type Buss = {
  color: string;
  model: boolean;
  price: number;
};

type Buss변환기<Type> = {
  [key in keyof Type]: string | number;
};

type newType = Buss변환기<Buss>;

const buss2: newType = {
  color: "red",
  model: "d",
  price: 30,
};

type Busss = {
  color: string;
  model: boolean;
  price: number;
};

type TypeChangers<MyType, T> = {
  [key in keyof MyType]: T;
};

type NewBus = TypeChangers<Busss, boolean>;
type NewBus2 = TypeChangers<Busss, string[]>;
