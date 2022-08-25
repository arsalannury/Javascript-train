function Converter(value, valueType, objectKey = "key") {
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
      throw new Error(`can not change type ${typeof value} to string`);
    }
  }

  if (valueTypeToLowerCase === "boolean") {
    return Boolean(value);
  }

  if (valueTypeToLowerCase === "object[]") {
    if (typeof value === "string") {
      return value.split(" ");
    } else if (typeof value === "number" || typeof value === "boolean") {
      return [value];
    } else {
      throw new Error(`can not change type ${typeof value} to object[]`);
    }
  }

  if (valueTypeToLowerCase === "object{}") {
    if (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean" ||
      typeof value === "function" ||
      Array.isArray(value)
    ) {
      return { [objectKey]: value };
    }
  } else {
    throw new Error(`can not change type ${typeof value} to object{}`);
  }
}

// console.log(Converter([34,56], "string"));
// console.log(Converter(0,'boolean'));
// console.log(Converter('arsalan',"object[]"));
// console.log(Converter([1,2,3,4],'object{}','person'));
