const FooA = (existingClass) => class extends existingClass {
    doA() { console.log('Consider A done'); }
};
const FooB = (existingClass) => class extends existingClass {
    doB() { console.log('Consider B done'); }
};

class Foo {
    isFoo() { return true; }
}

class FooAB extends FooA(FooB(Foo)) {
    doAB() { console.log('Sorry I am lost'); }
}

const foo = new FooAB();

foo.doA(); //Consider A done
foo.doB(); //Consider B done
foo.doAB(); //Sorry I am lost
foo.isFoo(); //true