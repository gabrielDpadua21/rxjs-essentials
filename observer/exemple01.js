const { Observable } = require('rxjs');

const promise = new Promise(resolve => {
    resolve('New Promise');
});

promise.then(console.log);

const obs = new Observable(subscriber => {
    subscriber.next('new Observable');
    subscriber.next('new Observable 2');
    subscriber.next('new Observable 3');
    setTimeout(() => {
        subscriber.next('new Observable 4');
        subscriber.complete();
    }, 1000);
});

obs.subscribe(console.log);