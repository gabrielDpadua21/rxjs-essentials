const { from, Observable } = require('rxjs');

function createPipeapleOperator(operatorFn) {
    return function (source) {
        return new Observable(subscriber => {
            source.subscribe(operatorFn(subscriber))
        })
    }
}

function firstElement() {
    return createPipeapleOperator(subscriber => ({
        next(value) {
            subscriber.next(value)
            subscriber.complete()
        }
    }))
}

function lastElement() {
    return createPipeapleOperator(subscriber => ({
        next(value) {
            subscriber.last = value
        },
        complete() {
            subscriber.next(subscriber.last)
            subscriber.complete()
        }
    }))
}



from([1, 2, 3, 4, 5])
    .pipe(firstElement())
    .subscribe(console.log);


from([1, 2, 3, 4, 5])
    .pipe(lastElement())
    .subscribe(console.log);