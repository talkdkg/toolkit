#! /bin/sh

for f in *.htm; do
base=`basename $f .htm`
mv $f $base.html
done
