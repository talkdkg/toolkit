function getFactors(num) {
	var factors = [];
	for (var i = 2; i <= num; i++) {
		while (num % i === 0) {
			factors.push(i);
			num = num / i;
		}

	}
	return factors;
}

var f = getFactors(600851475143);
console.log(f[f.length-1]);

