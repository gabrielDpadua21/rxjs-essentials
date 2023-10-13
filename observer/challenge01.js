const { Observable, noop } = require('rxjs');

function between(min, max) {
    if (min > max) [min, max] = [max, min];
    return new Observable(subscriber => {
        Array(max - min).fill().map((_, i) => {
            if (i == 0) return;
            subscriber.next(min + i);
        });
        subscriber.complete();
    });
}

between(4, 10).subscribe({
    next: (value) => console.log(value),
    error: noop,
    complete: () => console.log('End!')
});