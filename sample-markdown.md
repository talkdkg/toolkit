# Major Header

### What this is

This is a Ruby program that generates
Scala program that generates
Scheme program that generates
...(through 50 languages)...
REXX program that generates
the original Ruby code again.

![Language Uroboros][langs]

[langs]: https://lh5.googleusercontent.com/LOnAyEDvLI8WTEEGD3VZ4NCytt0E80Y5b_tBYkVYTYzGKgLVX-muc1ZOhaCZl2wLPmELjq8RxUZ9jNYtDuiTm8ihYuwjLeheLy0YFgDZya5zD4dcfJNa0kw_

<img src="https://lh5.googleusercontent.com/0E4nqO6llKpEu49I2Z37E8n_70MvzsNvyqjiOu-E-7QJvRZ3gKTJXB-MCBGj3sXQUBl8fQcvOU656PvZxFWNykhJS-N2amjCdaXceRNbenYY7TAXup6xx48-" height="531" width="600" />


### Usage

#### 1. Install all interpreters/compilers.

You are fortunate if you are using Ubuntu 13.04 (Raring Ringtail).
You just have to type the following apt-get command to install all of them.

    $ apt-get install algol68g bash beef boo clisp clojure1.4 coffeescript \
      fp-compiler g++ gauche gawk gcc gforth gfortran ghc gnat gnu-smalltalk \
      gobjc golang groovy icont intercal iverilog jasmin-sable llvm lua5.2 \
      make mono-devel mono-mcs nodejs ocaml octave open-cobol openjdk-6-jdk \
      parrot perl php5-cli pike7.8 python r-base regina-rexx ruby1.9.3 scala \
      swi-prolog tcl8.5 ucblogo valac

If you are not using Ubuntu, please find your way yourself.
If you could do it, please let me know.  Good luck.

#### 2. Run each program on each interpreter/compiler.

    $ ruby QR.rb > QR.scala
    $ scalac QR.scala && scala QR > QR.scm
    $ gosh QR.scm > QR.bash
    $ bash QR.bash > QR.st
    $ gst QR.st > QR.tcl
    $ tclsh QR.tcl > QR.unl
    $ ruby unlambda.rb QR.unl > QR.vala


You will see that `QR.rb` is the same as `QR2.rb`.

    $ diff QR.rb QR2.rb

Alternatively, just type `make`.

    $ make

### Gridview

As I said above, I tested the program on Ubuntu.
It does not provide Unlambda and Whitespace interpreters,
so this repository includes my own implementations.
For other languages, I used the following deb packages:

language     |ubuntu package |version
-------------|---------------|-----------------------------------
Ruby         |ruby1.9.3      |1.9.3.194-8.1ubuntu1.1
Scala        |scala          |2.9.2+dfsg-1
Scheme       |gauche         |0.9.3.3-8
Shell        |bash           |4.2-5ubuntu3
Smalltalk    |gnu-smalltalk  |3.2.4-2
Tcl          |tcl8.5         |8.5.13-1ubuntu4
Unlambda     |(none)         |-
Vala         |valac          |0.18.1-0ubuntu4
Verilog      |iverilog       |0.9.6-1
Whitespace   |(none)         |-
Ada          |gnat           |4.6ubuntu1
ALGOL68      |algol68g       |2.4.1-1
Awk          |gawk           |1:4.0.1+dfsg-2ubuntu1


### How to re-generate the source

    $ cd src
    $ rake

### License

Copyright (c) 2013 Kyle Dinh (github:kyledinh), (twitter:kalrissian)

MIT License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
