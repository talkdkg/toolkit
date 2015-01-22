func getFactors(max : Int64) -> [Int64] {
	var num : Int64 = max 
	var factors : [Int64] = []
	for var i : Int64 = 2; i <= num; i++ {
		while num % i == 0 {
			factors.append(i)
			num = num / i
		}
	}
	return factors
}

var arr = getFactors(600851475143)
var lastIdx = arr.count-1;
println(arr)
println(arr[lastIdx])

