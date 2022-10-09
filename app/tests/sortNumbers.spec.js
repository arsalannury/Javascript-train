const sortNumbers = require("../sortNumbers");

describe("sortNumbers fn Errors", () => {
  it("should return an error if argument is not array", () => {
    expect(() => sortNumbers("give me an error")).toThrow();
  });
  it("should return an error if second argument is not boolean", () => {
    expect(() => sortNumbers([], "give me an error")).toThrow();
  });
  it("should return emptry array is argument is emptry array", () => {
    const callFn = sortNumbers([]);
    expect(callFn).toEqual([]);
  });
  it("should return emptry array is argument is emptry array", () => {
    const callFn = sortNumbers([1,2,3,4,4,2,"4","2","test","jest","namoosan"]);
    expect(callFn).toEqual([1, 2, 3, 4]);
  });
  it("should return emptry array is argument isn't match to valid array", () => {
    const callFn = sortNumbers(["test", "jest", "namoosan"]);
    expect(callFn).toEqual([]);
  });
  it("should return reverse array", () => {
    const callFn = sortNumbers([1, 2, 3, 4, 5],false);
    expect(callFn).toEqual([5, 4, 3, 2, 1]);
  });
  it("should return sort array", () => {
    const callFn = sortNumbers([5, 4, 3, 2, 1]);
    expect(callFn).toEqual([1, 2, 3, 4, 5]);
  });
});
