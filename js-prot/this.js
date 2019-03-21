// new
function Foo(a) {
    this.a = a;
    var b; //Careful with this
}

Foo.prototype.createBar = function (bar) {
    this.bar = bar;
}

Foo.prototype.setB = function (newB) {
    b = newB;
}

Foo.prototype.getB = function () {
    return b;
}

var foo = new Foo('JavaScript Prototypes');

foo.createBar('Boise Code Camp');

foo.setB('Store hidden');

foo.a; //JavaScript Prototypes
foo.bar; //Boise Code Camp

foo.b; //undefined
foo.getB(); //Store hidden

// Object.create
var someObj = {
    createBar: function (bar) {
        this.bar = bar;
    }
}

var foo3 = Object.create(someObj);
foo3.a = 'JavaScript Prototypes';
foo3.createBar('Boise Code Camp');

foo3.a; //JavaScript Prototypes
foo3.bar; //Boise Code Camp

//Doesn't do what you want
var foo4 = Object.create(Foo); // Foo is really just a function

//Instead you would do
var foo5 = Object.create(foo); // foo is already an instance of Foo
//or
var foo6 = Object.create(Foo.prototype); // Foo's prototype can be used to create a function