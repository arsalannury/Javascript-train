function Converter(value, valueType) {
  if (typeof valueType !== "string") {
    throw new Error(
      `type string is not assignable to type ${typeof valueType}`
    );
  }

  const valueTypeToLowerCase = valueType.toLowerCase().trim();

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

  if (valueTypeToLowerCase === "boolean") {
    return Boolean(value);
  }

  if (valueTypeToLowerCase === "object[]") {
    if (typeof value === "string") {
      return value.split(" ");
    } else if (typeof value === "number" || typeof value === "boolean") {
      return new Array(value);
    } else {
      throw new Error(
        "only number, boolean, string type can changed to object[]"
      );
    }
  }
  
}

// console.log(Converter([34,56], "string"));
// console.log(Converter(0,'boolean'));
