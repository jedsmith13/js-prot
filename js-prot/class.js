class Foo {
    constructor(a) {
        this.a = a;
    }

    createBar(bar) {
        this.bar = bar;
    }

}

var foo = new Foo('JavaScript Prototypes');
foo.createBar('Boise Code Camp');

console.log(foo.a);
console.log(foo.bar);