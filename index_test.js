var _ = require('underscore');
var index = require('./index.js');


// test(index.fibUntil(10), [1, 1, 2, 3, 5, 8], 'fibUntil');
// test(index.fibUntil(1), [1, 1], 'fibUntil');
// test(index.fibUntil(8), [1, 1, 2, 3, 5, 8], 'fibUntil');

// test(index.isPal(121), true, 'isPal');
// test(index.isPal(123), false, 'isPal');

// test(index.problem1(), 233168, 'problem1');
// test(index.problem2(), 4613732, 'problem2');
// test(index.problem3(), 6857, 'problem3');
// test(index.problem4(), 580085, 'problem4');
// test(index.problem5(), 232792560, 'problem5');
// test(index.problem6(), 25164150, 'problem6');
// test(index.problem7(), 104743, 'problem7');
// test(index.problem8(), 23514624000, 'problem8');
test(index.problem9(), 31875000, 'problem9');
test(index.problem10(), 142913828922, 'problem10');



function test (actual, expected, functionName) {
  if (_.isEqual(actual, expected)) {
    console.log(functionName + ' works');
  } else {
    console.log(functionName + ' ERROR!');
    console.log('Expected: ' + expected);
    console.log('Actual: ' + actual);
  }
}

