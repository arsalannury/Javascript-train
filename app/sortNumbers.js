function sortNumbers(array, sortSmalToBig = true) {
  const validArrayValues = ['1','2','3','4','5','6','7','8','9','0',true,false,1,2,3,4,5,6,7,8,9,0];
  if (!Array.isArray(array)) {
    throw new Error(`type ${typeof array} is not assignable to type Array`);
  } else if (typeof sortSmalToBig !== "boolean") {
    throw new Error(
      `type ${typeof sortSmalToBig} is not assignable to type Boolean`
    );
  }

  if (array.length === 0) return [];
  const includesFn = (value) => {
    return validArrayValues.includes(value);
  };
  const mapOnFinalArrayFn = (value) => {
    const toNumber = Number(value);
    return toNumber;
  };
  const sortArrayFn = (a, b) => {
    if (sortSmalToBig) {
      return a - b;
    } else {
      return b - a;
    }
  };
  const FinalValidArrayValues = array.filter(includesFn);
  const FinalValidArrayValuesToNumber =FinalValidArrayValues.map(mapOnFinalArrayFn);
  const removeDuplicateValues = [...new Set(FinalValidArrayValuesToNumber)];
  const sortArray = removeDuplicateValues.sort(sortArrayFn);
  return sortArray;
}
module.exports = sortNumbers;