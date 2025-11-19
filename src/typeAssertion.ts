{
  //Type Assertion Example
  const kgToGM = (weight: number | string): string | number | undefined => {
    if (typeof weight === "string") {
      const result = parseFloat(weight) * 1000;
      return `Converterd value is ${result}`;
    }
    if (typeof weight === "number") {
      return weight * 1000;
    }
  };
  console.log(kgToGM("500"));
}
