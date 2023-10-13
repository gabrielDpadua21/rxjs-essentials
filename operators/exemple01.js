const { of } = require('rxjs');
const { last, first, map } = require('rxjs/operators');

const obs$ = of('frajola', 'thor', 'zeus', 'lucyfer');


obs$
.pipe(first())
.subscribe(console.log);

obs$
.pipe(last())
.subscribe(console.log);


obs$
.pipe(map(value => value.toUpperCase()))
.subscribe(console.log);