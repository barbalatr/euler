var _ = require('underscore');

module.exports = {
  problem1: problem1,
  problem2: problem2,
  problem3: problem3,
  problem4: problem4,
  problem5: problem5,
  problem6: problem6,
  problem7: problem7,
  problem8: problem8,
  problem9: problem9,
  fibUntil: fibUntil,
  isPal: isPal,
};

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
}
function fibUntil (x) {
  var fibo = [1];
  var i = 1;
  var next = 1;
  while (next <= x) {
    fibo.push(next);
    i++;
    next = fibo[i-2]+fibo[i-1];
  }
  return fibo;
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
		for(var j = 100; j <= 999; j++){
			product.push(i*j)
		}
	}
	var palindromes = _.filter(product, isPal);
  return _.last(palindromes);
}
function isPal (a) {
  var b = [];
  a = String(a).split('');
  for (var x = 0; x < a.length; x++) {
    b[a.length - 1 - x] = a[x];
  } 
  return _.isEqual(a, b);
}

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

function problem6 () {
	 
	 var sumsquare = 0;
	 var sum = 0;	
	 var squaresum = 0;
	 
	 for (var i = 1; i <= 100; i++) {
	 	sumsquare = sumsquare + Math.pow(i,2);
	 }
	 for (var j = 1; j <= 100; j++) {
	 	sum = sum + j;
	 	squaresum = Math.pow(sum,2);
	 }
		
	return squaresum - sumsquare;
}

function problem7 () {
	var prime = [2];
	var num = 2; 
	while (prime.length < 10001) {
		for (var i = 2; i < num; i++) {
			if (num % i == 0) {break;}
			if (i + 1 == num) {
				prime.push(num);
			}
		}
		num += 1; 
	}
	return prime[prime.length - 1];
}

function problem8 () {
	var myString = "73167176531330624919225119674426574742355349194934\
96983520312774506326239578318016984801869478851843\
85861560789112949495459501737958331952853208805511\
12540698747158523863050715693290963295227443043557\
66896648950445244523161731856403098711121722383113\
62229893423380308135336276614282806444486645238749\
30358907296290491560440772390713810515859307960866\
70172427121883998797908792274921901699720888093776\
65727333001053367881220235421809751254540594752243\
52584907711670556013604839586446706324415722155397\
53697817977846174064955149290862569321978468622482\
83972241375657056057490261407972968652414535100474\
82166370484403199890008895243450658541227588666881\
16427171479924442928230863465674813919123162824586\
17866458359124566529476545682848912883142607690042\
24219022671055626321111109370544217506941658960408\
07198403850962455444362981230987879927244284909188\
84580156166097919133875499200524063689912560717606\
05886116467109405077541002256983155200055935729725\
71636269561882670428252483600823257530420752963450";
 var lista = myString.split("").map(Number);
 var result = 0;
 var prod = 1; 

 	for (var j = 12; j < 10000; j++){
 		product(13, lista, j - 12);
 		if (prod > result) {
 		result = prod}
 	}

 	function product (n, list, initial) {
 		prod = 1;
 		for (var i = 0; i < n; i++) {
 			prod *= list[initial + i];				
 		}
 		return prod;
 	}
 	return result;
}

function problem9 () {
	return product_abc(find_abc());	

	function product_abc ([x,y,z]) {return x*y*z;}	
	
	function find_abc () {
		var a, b, c;
		for (b = 1; b < 999; b++) {
			for (a = 0; a < b; a++) {
				c = 1000 - a - b;
				if (Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2)) { return [a,b,c]; }	
			}		
		}
	}	
}











