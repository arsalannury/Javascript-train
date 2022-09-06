function ConverterReffrence(objectOrArray) {
  // * * * if argument whitch is passed was a Array , Converter using this array for validating values * * * //
  const validArrayValues = ['1','2','3','4','5','6','7','8','9','0',true,false,1,2,3,4,5,6,7,8,9,0];
  if (typeof objectOrArray !== "object" || !Array.isArray(objectOrArray)) {
    throw new Error(
      `type ${typeof objectOrArray} is not assignable to type Object or Array`
    );
  }

  if (Array.isArray(objectOrArray)) {
    if (objectOrArray.length === 0) return [];
    const includesFn = (value) => {
      return validArrayValues.includes(value);
    };
    const iterateFinalFn = (value) => {
      const toNumber = Number(value);
      return toNumber;
    };
    const FinalValidArrayValues = objectOrArray.filter(includesFn);
    const FinalValidArrayValuesToNumber = FinalValidArrayValues.map(iterateFinalFn)
    console.log(FinalValidArrayValuesToNumber);
    // const removeDuplicateValues = [...new Set(FinalValidArrayValues)];
    // console.log(removeDuplicateValues);
  }
}

ConverterReffrence([false,"true","1", "2", "2", "2", "2", "2", "2", "2", "r", "t", 2, "5", "3"])
