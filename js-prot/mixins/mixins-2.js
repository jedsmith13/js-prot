const fooA = {
    doA: function() {
        console.log('Consider A done');
    },
    doB: function() {
        console.log('Consider A\'s version of doB done');
    }
};
const fooB = {
    doB: function() {
        console.log('Consider B done');
    }
};

const foo = Object.create(fooA);

Object.assign(foo, fooB);

foo.doA(); // Consider A done
foo.doB(); // Consider B done
