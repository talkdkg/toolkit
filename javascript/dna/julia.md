# Julia Language

## Installation

* http://julialang.org/downloads/
* Gadfly 
```
Pkg.add("Gadfly")
using Gadfly
draw(SVG("output.svg", 6inch, 3inch), plot([sin, cos], 0, 25)) 
#(plot a pair of simple functions over a range)
```

## Documentation

* http://docs.julialang.org/en/release-0.2/
* http://julialang.org/blog/2013/03/julia-tutorial-MIT/
* http://randyzwitch.com/julia-language-beginners/


## Gadfly

Sample svg generation
```
use Gadfly
draw(SVG("foo.svg", 6inch, 3inch), plot(x=collect(1:100), y=sort(rand(100))))
```

## Using julia

From command line
```
$ julia script.jl arg1 arg2...
$ julia -e 'for x in ARGS; println(x); end' foo bar
foo
bar
```

### Command line flag options

```
julia [options] [program] [args...]
 -v --version             Display version information
 -q --quiet               Quiet startup without banner
 -H --home=<dir>          Load files relative to <dir>
 -T --tab=<size>          Set REPL tab width to <size>

 -e --eval=<expr>         Evaluate <expr>
 -E --print=<expr>        Evaluate and show <expr>
 -P --post-boot=<expr>    Evaluate <expr> right after boot
 -L --load=file           Load <file> right after boot on all processors
 -J --sysimage=file       Start up with the given system image file

 -p n                     Run n local processes
 --machinefile file       Run processes on hosts listed in file

 --no-history             Don't load or save history
 -f --no-startup          Don't load ~/.juliarc.jl
 -F                       Load ~/.juliarc.jl, then handle remaining inputs
 --color=yes|no           Enable or disable color text

 -h --help                Print this message

```

## julia language commands

| Functions       | returns             |
|-----------------|------------------  -|
| typeof          | var type            |
| typemin         | min value           |
| typemax         | max value           | 
| float32         | cast to float32     |
| eps             | makes float to eps  |
| bits            |                     |
| BigInt          |                     |
| BigFloat        |                     |
| factorial       | 

| Builtin Types   | functions           |
|-----------------|------------------  -|
| NaN             | isnan(x)            |
| Inf, -Inf       | isinf(x)            |
|                 | isinfinite(x)       |
|                 | isequal(x, y)       |


| Functions          |                     |
|--------------------|------------------  -|
| apply(f, args..)   |                     |
| length(x)          | returns length 


## Tasks

* Tasks, produce(), consume()


## Anonymous functions
```
square_it = (x) -> x^2

square_it = function(x)
   return x^2
end

```


