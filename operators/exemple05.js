const { of, Observable } = require('rxjs')

function endOf(end) {
    return function(source) {
        return new Observable(subscriber => {
            source.subscribe({
                next(value) {
                    if(Array.isArray(value)) {
                        subscriber.next(
                            value.filter(element => element.endsWith(end))
                        )
                        subscriber.complete()
                    } else if (value.endsWith(end)) subscriber.next(value)
                }
            })
        })
    } 
}

of('frajola', 'thor', 'lucyfer', 'zeuzz')
 .pipe(endOf('zz'))
 .subscribe(console.log)



of(['frajola', 'thor', 'lucyfer', 'zeuzz'])
  .pipe(endOf('r'))
  .subscribe(console.log)