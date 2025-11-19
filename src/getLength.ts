const getLength = (val: string | number[]): number => {
  if (Array.isArray(val)) {
    return val.length;
  } else {
    return val.length;
  }
};
console.log("Str Length", getLength("Apurbo"));
console.log("Array Length", getLength([1, 2, 3, 4, 5]));
