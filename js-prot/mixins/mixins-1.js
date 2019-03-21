const fooA = {
    doA: function() {
        console.log('Consider A done');
    }
};
const fooB = {
    doB: function() {
        console.log('Consider B done');
    }
};
const fooC = {
    doC: function() {
        console.log('Consider C done');
    }
};

const foo = Object.create(fooA);

Object.assign(foo, fooB, fooC);

foo.doA(); // Consider A done
foo.doB(); // Consider B done
foo.doC(); // Consider C done
