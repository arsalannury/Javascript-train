const ProxyTester = require("../designPatterns/Proxy/Proxy");

describe("language proxy should work as expected", () => {
    test("get values as expected", () => {
        const getProxyValues = ProxyTester.getValues('continent');
        expect(getProxyValues).toBe("asia");
    })
    test("set values as expected", () => {
        ProxyTester.setValues("title", "english");
        const getProxyValues = ProxyTester.getValues("title");
        expect(getProxyValues).toBe("english");
    })
})
