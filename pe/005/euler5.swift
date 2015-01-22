// divisors    11 12 13 14 15 17 18 19 20 
//	var divs = [2,3,5,7,11,13,17,19]

func divisibleAllUnder20(num : Int) -> Bool {
	var divs = [11,12,13,14,15,16,17,18,19]
	for d in divs {
		if num % d != 0 { return false }	
	}
	return true
}

for var i = 1000000; i < 1000000000; i += 20 {
	println(i)
	if divisibleAllUnder20(i) {
		println ("========== \(i)")
		break
	}
}

