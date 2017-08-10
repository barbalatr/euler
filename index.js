console.log('Problem 1: ' + problem1());
console.log('Problem 2: ' + problem2());

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

