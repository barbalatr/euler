var _ = require('underscore');

console.log('Problem 1: ' + problem1());
console.log('Problem 2: ' + problem2());
console.log('Problem 3: ' + problem3());
console.log('Problem 4: ' + problem4());

function isEven (x) { return (x % 2) == 0; }

function problem1 () {
  var result = 0;
  for (var i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0)
      result += i;
  }
  return result;
}
function problem2 () {
  var fibo = fibUntil(4000000);
  var result = 0;
	for (var x = 0; x < fibo.length; x++) {
		if(fibo[x] % 2 == 0) {
			result = result + fibo[x];
		}
	}
	return result;

  function fibUntil (x) {
    var fibo = [1];
    var i = 1;
    var next = 1;
    while (next < x) {
      fibo.push(next);
      i++;
      next = fibo[i-2]+fibo[i-1];
    }
    return fibo;
  }
}

function problem3 () {
	var num = 600851475143;
	var largestprime = 0
	for (var i = 2; i <= num ; i++) {
		if (num % i == 0) {
			largestprime = i;
			num = num / i;
		}
	}
	return largestprime;
}


function problem4 () {
	var product = [];

	for (var i = 100; i <= 999; i++) {
		for (var j = 100; j <= 999; j++) {
			product.push(i*j)
		}
	}

	function isPal (a) {
		var b = [];
		a = String(a).split('');
		for (var x = 0; x < a.length; x++) {
			b[a.length - 1 - x] = a[x];
		} 
		return _.isEqual(a, b);
	}
	var palindromes = _.filter(product, isPal);
  return palindromes[palindromes.length - 1];
}















