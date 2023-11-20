const { of, Observable } = require('rxjs')

function endOf(end) {
    return function(source) {
        return new Observable(subscriber => {
            source.subscribe({
                next(value) {
                    if (value.endsWith(end)) subscriber.next(value)
                }
            })
        })
    } 
}

of('frajola', 'thor', 'lucyfer', 'zeuzz')
 .pipe(endOf('zz'))
 .subscribe(console.log)