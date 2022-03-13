interface Objs {
  price: number;
  year: number;
  [key: string]: string | number;
}

let obj: Objs = {
  model: "k5",
  brand: "kia",
  price: 6000,
  year: 2030,
  date: "6월",
  percent: "5%",
  dealer: "김차장",
};

interface Objz {
  "font-size": number;
  [key: string]: number | Objz;
}

let objz: Objz = {
  "font-size": 10,
  secondary: {
    "font-size": 12,
    third: {
      "font-size": 14,
    },
  },
};
