let instance;
let counter = 0;

 class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can't create more than one instance of this class");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }
  getCount() {
    return counter;
  }
  increment() {
    return ++counter;
  }
  decrement() {
    return --counter;
  }
}

const firstInstance = Object.freeze(new Counter());
// const secondInstance = new Counter();

const incBtn = document.createElement("button");
incBtn.addEventListener("click", () => {
  for (let i = 0; i <= 3; i++) {
    firstInstance.increment();
  }
  console.log(firstInstance.getCount());
});

const decBtn = document.createElement("button");
decBtn.addEventListener("click", () => {
  firstInstance.decrement();
  console.log(firstInstance.getCount());
});

incBtn.innerText = "increment Counter";
decBtn.innerText = "decrement Counter";
document.body.append(incBtn);
document.body.append(decBtn);

//! ------------------------------------------------------------------

 class Config {
  static #instance = null;

  //* should create private constructor with TS //
  constructor() {}

  static getInstance() {
    if (this.#instance === null) {
      this.#instance = new Config();
    }
    return this.#instance;
  }
}

const MailConfig = Config.getInstance();
const ResumeConfig = Config.getInstance();
// * this return true since have call getInstance method for create an object
// console.log(MailConfig === ResumeConfig);


module.exports = {
  Counter,
  Config,
  incBtn,
  decBtn,
  firstInstance
}
 