const { from } = require('rxjs');

from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).subscribe(num => console.log(`#1.1: ${Math.pow(2, num)}`));