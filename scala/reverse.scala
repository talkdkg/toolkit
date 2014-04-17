def reverseString (s: String) :String = {

   val arr = s.toArray
   val len = arr.length -1

   for { i <- (len/2 to len).reverse } {
      val j = len - i 
      val tmp = arr(i)
      arr(i) = arr(j)
      arr(j) = tmp
   }
   arr.mkString
} 

val os = "Buffalo"

println("Original string: " + os)
println(reverseString(os))


/*
0123456
Buffalo


var j = l - i 

6 -> 0
5 -> 1
4 -> 2
3 -> 3

if (i > l/2)  {
   swap(arr, i, j)
}
*/
