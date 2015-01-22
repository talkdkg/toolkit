func nextFib(seq : [Int]) -> [Int] {
	var arr = seq
	arr[0] = arr[1] 
	arr[1] = arr[2] 
	arr[2] = arr[1] + arr[0] 
	return arr
}

var arr : [Int] = [1,2,3]
var sum = 2

do {
	arr = nextFib(arr)
	if arr[2] % 2 == 0 {
		sum += arr[2]
	}
	println(arr)
} while arr[2] < 4000000 

println(sum)

