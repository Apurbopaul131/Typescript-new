interface Watch {
  brand: string;
  model: string;
}
interface Developer<T, X = null> {
  name: string;
  computer: {
    brand: string;
    model: string;
  };
  smartWatch: T;
  bike?: X;
}

const poorDeveloper: Developer<Watch> = {
  name: "Apubo",
  computer: {
    brand: "Hp",
    model: "h13",
  },
  smartWatch: {
    brand: "Emilab",
    model: "emi30",
  },
};
const richDeveloper: Developer<
  {
    brand: string;
    model: string;
    display: string;
  },
  { brand: string; model: string }
> = {
  name: "Apubo",
  computer: {
    brand: "Hp",
    model: "h13",
  },
  smartWatch: {
    brand: "Emilab",
    model: "emi30",
    display: "Led",
  },
  bike: {
    brand: "hero",
    model: "hero23",
  },
};
