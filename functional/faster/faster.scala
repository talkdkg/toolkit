/* write a faster function that caches slower function results */
val slow = (a:Int) => { 
    val b = a +2
    "slow-" + b.toString 
}

def heavy (a:Int) : String  = {
    return "heavy-" + a.toString
}

def makeFaster(f:Int => String): (Int) => String = {
    val cache = collection.mutable.Map[Int, String]()
    return (x: Int) => {
        var a = ""
        if (cache.contains(x))  {
            a = "from cache : " + cache(x)
        } else {
            a = f(x)
            cache(x) = a
            a = "write cache : " + a 
        }
        a
    }  
}

println("...")
println(slow(23))
println(heavy(23))

val f1 = makeFaster(slow)
val f2 = makeFaster(heavy)

println("...")
println(f1(24))
println(f1(24))
println(f2(24))
println(f2(24))
println(f2(24))

