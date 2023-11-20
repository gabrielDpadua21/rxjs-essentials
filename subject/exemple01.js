const { Observable, Subject } = require('rxjs');

function getObservable() {
    return new Observable(subscriber => {
        setTimeout(() => {
            console.log('#1 Observable...')
            subscriber.next(Math.random())
            subscriber.complete()
        }, 2000)
    })
}

function getSubject() {
    const sub = new Subject()
    setTimeout(() => {
        console.log('#2 Subject...')
        sub.next(Math.random())
        sub.complete()
    }, 2000)
    return sub
}

obs = getObservable()
obs.subscribe(console.log)
obs.subscribe(console.log)

sub = getSubject()
sub.subscribe(console.log)
sub.subscribe(console.log)