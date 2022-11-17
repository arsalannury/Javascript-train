const language = {
    title: "persian",
    continent: "asia",
    speakers: "100/00/000"
};

const languageProxy = new Proxy(language, {
    get(target, prop) {
        // console.log(`value of ${prop} is ${target[prop]}`)
        return target[prop];
    },
    set(target, prop, value) {
        if (typeof value !== 'string') {
            throw new Error("value must be as string type");
        }
        console.log(`changed ${prop} from ${target[prop]} to ${value}`)
        target[prop] = value;
        return Reflect.set(target, prop, value);
    }
});

class ProxyTester {
    static getValues(key) {
        return languageProxy[key];
    }
    static setValues(key,value) {
        return languageProxy[key] = value
    }
}

module.exports = ProxyTester;
