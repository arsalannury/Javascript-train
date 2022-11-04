const CounterProgram = require("../designPatterns/Singeltons/Singelton");

describe("Counter Class with singelton design", () => {
  beforeEach(() => {
    CounterProgram.incBtn = jest.fn();
    CounterProgram.decBtn = jest.fn();
  });
  const refference = CounterProgram.firstInstance;
  it("should increment method call", () => {
    refference.increment();
    expect(refference.getCount()).toBe(1);
  });
  it("should decrement method call", () => {
    refference.decrement();
    expect(refference.getCount()).toBe(0);
  });
  it("should getCount method call", () => {
    expect(refference.getCount()).toBe(0);
  });
  it("should getInstance method return an error", () => {
    expect(() => new CounterProgram.Counter()).toThrow();
  });
});
