const { Observable } = require('rxjs');

function ofWithDelay(time=1000, ...elements) {
    return new Observable(subscriber => {
        (elements || []).forEach((element, index) => {
            setTimeout(() => {
                subscriber.next(element);
                if (elements.length === index + 1 ) subscriber.complete();
            }, time * (index + 1))
        });
    });
}

ofWithDelay(2000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    .subscribe(console.log);