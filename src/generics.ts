{
  //generics
  //generics Array
  type genericsArr<T> = Array<T>;
  type genericsTuple<x, y> = [x, y];
  const friendsArr: genericsArr<string> = ["Apurbo", "Shoag", "Subuj", "Manik"];
  const numberList: genericsArr<number> = [100, 200, 300, 500, 700, 800];
  const personInfo: genericsArr<{ name: string; age: number }> = [
    { name: "Apubo", age: 25 },
    { name: "Maruf", age: 22 },
  ];
  const userWithId: genericsTuple<number, { name: string; age: number }> = [
    123,
    { name: "Apurbo", age: 25 },
  ];
  console.log(userWithId);

  console.log(personInfo);
}
