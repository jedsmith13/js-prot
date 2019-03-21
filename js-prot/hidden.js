function Foo(a) {
    this.a = a;
    var b;
}

Foo.prototype.setB = function (newB) {
    b = newB;
}

Foo.prototype.getB = function () {
    return b;
}

var foo = new Foo('JavaScript Prototypes');

foo.setB('Store hidden');

foo.getB(); //Store hidden

var foo2 = new Foo('JavaScript Prototypes 2');

foo2.getB(); //Store hidden

foo2.setB('Store shared');

foo2.getB(); //Store shared
foo.getB(); //Store shared
