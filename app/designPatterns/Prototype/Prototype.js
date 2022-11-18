class Dog {
    constructor(name) {
        this.name = "name";
    }

    bark() {
        return "Woof"
    }

}

class SuperDog extends Dog {
    constructor(name) {
        super(name);
    }

    fly() {
        return "fly and go to sky my friend"
    }
}

const mySuperDog = new SuperDog();
mySuperDog.fly();
mySuperDog.bark();

const dog = {
    bark() {
        return "Woof"
    }
}

const joyi = Object.create(dog);
/*
console.log(joyi);
console.log(joyi.bark());
console.log(Object.keys(joyi));
console.log(Object.keys(joyi.__proto__));*/

// -----------------------------------------------------------------

class Book {
    title;
    price;
    content = null;

    constructor(title, price, content = null) {
        this.title = title;
        this.price = price;
        this.content = content !== null ? content : this.fetchBookContent();
    }

    clone() {
        const content = this.content + `(cached)`;
        return new Book(this.title, this.price, content)
    }

    fetchBookContent() {
        return "book content fetched";
    }

    getContent() {
        return this.content;
    }

}

const MAIN_INSTANCE = new Book("Heroes", "20$");
const tolstoy = MAIN_INSTANCE.clone();
const shakoori = MAIN_INSTANCE.clone();


