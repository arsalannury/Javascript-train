const CustomObject = require("../sliceObject");

describe("CustomObject class pushObjectInArray static method", () => {
  it("should return error if arguman is undefined", () => {
    expect(() => CustomObject.pushObjectInArray()).toThrow();
  });
  it("should return array if arguman passed", () => {
    const callFn = CustomObject.pushObjectInArray({ jest: "jest" });
    expect(callFn).toEqual([{ jest: "jest" }]);
  });
});

describe("CustomObject class sliceObject static method", () => {
  it("should put object in an array", () => {
    const callFn = CustomObject.sliceObject({ test: "jest" });
    expect(callFn).toEqual([{ test: "jest" }]);
  });
  it("should return an error if argumant is undefined", () => {
    expect(() => CustomObject.sliceObject()).toThrow();
  });
});
