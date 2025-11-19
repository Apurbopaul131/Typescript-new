type X = {
  x: number;
};
type Y = {
  y: string;
};
type NewType = { id: number } & (X | Y);
const newObj1: NewType = { id: 1, x: 10 };
const newObj2: NewType = { id: 2, y: "Hello" };
console.log(newObj1, newObj2);
