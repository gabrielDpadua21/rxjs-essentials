const { of, Observable } = require('rxjs')

function endOf(end) {
    return function(source) {
        return new Observable(subscriber => {
            source.subscribe({
                next(value) {
                    if (end === value.substring(value.length - 1))
                        subscriber.next(value)
                }
            })
        })
    } 
}

of('frajola', 'thor', 'lucyfer', 'zeuzz')
 .pipe(endOf('a'))
 .subscribe(console.log)