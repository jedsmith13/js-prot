const foo = {
    a: true,
    get: function() {
        fetch('https://xkcd.com/562/info.0.json', {mode: 'no-cors'})
            .then(function(result) { 
                if (this.a) {
                    return console.log(result);
                } 
                return console.log('No this.a');
            }
        );
    }
};

const foo2 = Object.create(foo);

foo2.get(); // this.a doesn't exist

window.a = true;

foo2.get(); //Response