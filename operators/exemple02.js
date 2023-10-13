const { interval } = require('rxjs');
const { concatAll, map } = require('rxjs/operators');

interval(1000)
.pipe(
    map(_ => [1, 2, 3]),
    concatAll()
)
.subscribe(console.log);

