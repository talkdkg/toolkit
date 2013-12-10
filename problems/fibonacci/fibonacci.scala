def fib(i:Int):Int = {
   def fib2(i:Int, a:Int, b:Int):Int = i match {
      case 1 => b
      case _ => fib2(i-1, b, a+b)
   }
   fib2(i,0,1)
}

for { i <- 1 to 13 } yield {
   println("Fibonacci sequence " + i.toString + " :" + fib(i))
}

println("== next test ===============")

def fibonacci(n:Int) = {
   def series(i:BigInt,j:BigInt):Stream[BigInt] = i #:: series(j, i+j) 
   series(1,0).take(n).foldLeft(BigInt("0"))(_+_)
}
 
(1 to 13) foreach { n => println("Fib" + n + ": " + fibonacci(n).toString) }


println("== third test ===============")

class PrettyStream[A](str: =>Stream[A]) {
   def ::(hd: A) = Stream.cons(hd, str)
}
implicit def streamToPrettyStream[A](str: =>Stream[A]) = new PrettyStream(str)
 
def fibby: Stream[Int] = 0 #:: 1 #:: fibby.zip(fibby.tail).map{ case (a,b) => a + b }

