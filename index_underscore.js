var _ = require('underscore');

console.log('Problem 1: ' + problem1());
console.log('Problem 2: ' + problem2());

function problem1 () {
  return _.reduce(_.filter(_.range(1000), isDiv3or5), add);
  function isDiv3or5 (a) { return (a % 3 == 0) || (a % 5 == 0); }
}
function problem2 () {
  return _.reduce(_.filter(fiboUntil(4000000), isEven), add);
  function fiboUntil (x) {
    var fibo = [1];
    var i = 1;
    var next = 1;
    while (next < 4000000) {
      fibo.push(next);
      i++;
      next = fibo[i-2]+fibo[i-1];
    }
    return fibo;
  }
  function isEven (x) { return (x % 2) == 0; }
}
function add (a, b) { return a + b; }

