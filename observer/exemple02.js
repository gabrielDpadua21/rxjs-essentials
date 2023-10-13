const { Observable, noop } = require('rxjs');

const obs = new Observable(subscriber => {
    subscriber.next('new Observable');
    const randomValue = Math.random();
    if (randomValue > 0.5) subscriber.complete();
    if (randomValue < 0.5) subscriber.error('Error');
});

obs.subscribe({
    next: (value) => console.log(`Next: ${value}`),
    error: (err) => console.log(`Error: ${err}`),
    complete: () => console.log('Complete')
});

obs.subscribe({
    next: (value) => console.log(`Next: ${value}`),
    error: noop,
    complete: () => console.log('Complete')
});
