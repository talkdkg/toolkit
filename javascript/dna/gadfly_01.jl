use Gadfly
draw(SVG("foo.svg", 6inch, 3inch), plot(x=collect(1:100), y=sort(rand(100))))
