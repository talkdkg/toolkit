func isPalindrome (num : Int) -> Bool {
	//let str = "\(num)" 
	let arr = Array("\(num)") 
	var z = arr.count-1 
	var piv = z/2

	for var i=0; i <= piv; i++, z-- {
		if (arr[i] != arr[z]) { return false }	
	}  
	return true 
}

var num = 1009
if isPalindrome(num) { println(1009) }
num = 808
if isPalindrome(num) { println(808) }
if isPalindrome(12321) { println(12321) }


func findLargestPalindrome(num : Int) -> Int {
	var largest = -1
	var max = num
	var min = 0 
	
	for var i = max; i > min; i-- {
		for var j = max; j > min; j-- {
			println("\(j) : \(i)")
			var prod = i * j
			if isPalindrome(prod) && prod > largest { 
				largest = prod 
				println ("=========== \(prod)")
			}
		}
	}
	return largest 
}

let pal = findLargestPalindrome(999)
println(pal)

