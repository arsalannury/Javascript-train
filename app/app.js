function Converter(value, valueType) {
  if (typeof valueType !== "string") {
    throw new Error(`type string is not assignable to type ${typeof valueType}`);
  }

  const valueTypeToLowerCase = valueType.toLowerCase();

  if (valueTypeToLowerCase === "string") {
    if (typeof value === "number") {
      return String(value);
    } else if (Array.isArray(value)) {
      return value.join(" ");
    } else if (typeof value === "boolean") {
      return String(value);
    } else {
      throw new Error("only number and boolean type can changed to string");
    }
  }



  
}

// console.log(Converter([34,56], "string"));
