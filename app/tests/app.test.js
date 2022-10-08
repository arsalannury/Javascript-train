const Converter = require("../app");

describe("App function method valueType string", () => {
  test("if value is number format", () => {
    const callFn = Converter(1255, "string");
    expect(callFn).toBe("1255");
  });
  test("if value is array that contains values", () => {
    const callFn = Converter([1255], "string");
    expect(callFn).toBe("1255");
  });
  test("if value is boolean", () => {
    const callFn = Converter(true, "string");
    expect(callFn).toBe("true");
  });
});

describe("App function method valueType boolean", () => {
  test("should return true value", () => {
    const callFn = Converter("ars", "boolean");
    expect(callFn).toBe(true);
  });
  test("should return false value", () => {
    const callFn = Converter(null, "boolean");
    expect(callFn).toBe(false);
  });
});

describe("App function method valueType any[]", () => {
  test("should convert string to array", () => {
    const callFn = Converter("test", "any[]");
    expect(callFn).toContain("t");
  });
  test("should convert string to array", () => {
    const callFn = Converter("test", "any[]");
    expect(callFn).toContain("e");
  });
  test("should convert string to array", () => {
    const callFn = Converter("test", "any[]");
    expect(callFn).toContain("s");
  });
  test("should convert string to array", () => {
    const callFn = Converter("test", "any[]");
    expect(callFn).toContain("t");
  });
  test("should return array with 12 value", () => {
    const callFn = Converter(12, "any[]");
    expect(callFn).toContain(12);
  });
  test("should return array with true value", () => {
    const callFn = Converter(true, "any[]");
    expect(callFn).toContain(true);
  });
});

describe("App function method valueType object",() => {
  test("suold return object with custom key and string value",() => {
    const callFn = Converter("jest test","object{}","stringValue");
    expect(callFn).toEqual({stringValue:"jest test"});
  })
  test("suold return object with custom key and number value",() => {
    const callFn = Converter(1234,"object{}","numberValue");
    expect(callFn).toEqual({numberValue:1234});
  })
  test("suold return object with custom key and boolean value",() => {
    const callFn = Converter(false,"object{}","booleanValue");
    expect(callFn).toEqual({booleanValue:false});
  })
  test("suold return object with custom key and function value",() => {
    const callFn = Converter(function t(){} ,"object{}");
    expect(callFn).toEqual({key:function t(){}});
  })
  test("suold return object with custom key and array value",() => {
    const callFn = Converter(["test value"],"object{}","arrayValue");
    expect(callFn).toEqual({arrayValue:["test value"]});
  })
})