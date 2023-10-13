const { from } = require('rxjs');
const { map, concatAll } = require('rxjs/operators');
const Axios = require('axios-observable').Axios;

const url = 'https://api.github.com/users/gabrielDpadua21/repos';

from(Axios.get(url))
.pipe(
    map(response => response.data),
    concatAll(),
    map(repo => repo.full_name)
)
.subscribe(console.log);
