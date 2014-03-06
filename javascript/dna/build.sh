#!/bin/sh
# kyledinh, build script for Work.js 

function success {
   D=`date`
   # MacOS version
   cp -f src/Work.js dist/Work.js
   echo "/* Work.js built $D -- kyledinh */ " >> dist/Work.js
   tail -2 dist/Work.js
}

function test {
   "$@"
   local status=$?
   if [ $status -ne 0 ]; then
       echo "error with $1"
       exit 0
   fi
}

test node unit_work.js
test node test_work.js 
test node src/CompTool.js BLACKDOG BUCKHOG
success
