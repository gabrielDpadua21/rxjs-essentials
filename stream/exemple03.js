const { interval } = require('rxjs');

const generate = interval(1000);

const sub01 = generate.subscribe(num => {
    console.log(`#1.1: ${Math.pow(2, num)}`)
});


setTimeout(() => {
    sub01.unsubscribe();
}, 8000);