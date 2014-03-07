function slow(x)
    "slow-$(x)"
end

heavy (x) = "heavy-$x"

function faster(f::Function, x, cache) 
    if haskey(cache, x) 
        a = cache[x]
        return "from cache $a"    
    else 
        a = f(x) 
        cache[x] = a
        return "placed in cache $a"   
    end 
end

function makeFunc(f::Function) 
    cache = Dict()
    x-> faster(f, x, cache)
end

println(slow(4))
println(heavy(4))

f1 = makeFunc(slow)
f2 = makeFunc(heavy)

println(f1(55))
println(f2(55))
println(f1(55))
println(f2(55))
println(f1(55))
println(f2(55))

