const checkMarks = (score: number): string => {
  return score >= 80 ? "A+" : score >= 70 ? "A" : score >= 60 ? "A-" : "F";
};
console.log(checkMarks(60));
