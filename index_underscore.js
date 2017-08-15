var _ = require('underscore');

module.exports = {
  problem5: problem5,
};

console.log('Problem 1: ' + problem1());
console.log('Problem 2: ' + problem2());
console.log('Problem 5: ' + problem5());

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


// -- Problem 5 -- 

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


function problem5 () {
  var num = 2;
  var bool = false;
  while (bool === false) {
    for (var i = 2; i <= 20; i++) {
      if(num % i !== 0){break;}      
    }
    num = num + 1;
    bool = (i == 21);  
  }
  return num - 1;
}


