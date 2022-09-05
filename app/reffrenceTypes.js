function ConverterReffrence(objectOrArray) {
  
    const validArrayValues = ['1','2','3','4','5','6','7','8','9','0','true','false',true,false,1,2,3,4,5,6,7,8,9,0];

  if (typeof objectOrArray !== "object" || !Array.isArray(objectOrArray)) {
    throw new Error(
      `type ${typeof objectOrArray} is not assignable to type Object or Array`
    );
  }
  if (objectOrArray.length === 0) return [];

  const includesFn = (value) => {
    return validArrayValues.includes(value);
  };

  if (Array.isArray(objectOrArray)) {
    const res = objectOrArray.filter(includesFn);
    console.log(res);
  }
}

console.log(ConverterReffrence(["1", "2", "r", "t", 2, "5", "3"]));
