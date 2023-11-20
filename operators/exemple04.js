const { from, Observable } = require('rxjs');

function firstElement() {
    return function (source) {
        return new Observable(subscriber => {
            source.subscribe({
               next(value) {
                  subscriber.next(value)
                  subscriber.complete()
               } 
            })
        })
    }
}

function lastElement() {
    return function (source) {
        return new Observable(subscriber => {
            let last;
            source.subscribe({
                next(value) {
                    last = value
                },
                complete() {
                    subscriber.next(last)
                    subscriber.complete()
                }           
            })
        })
    }
}


from([1, 2, 3, 4, 5])
    .pipe(firstElement())
    .subscribe(console.log);


from([1, 2, 3, 4, 5])
    .pipe(lastElement())
    .subscribe(console.log);