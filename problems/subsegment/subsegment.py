#!/usr/bin/env python3

def trimWords(words):
   return words.replace(',', '').replace('.','').lower()

f = open('input.txt')
lines = [line.strip() for line in f] 
f.close()

depth = int(lines[0])
breath = 4
target = lines[1:depth+1]
src = trimWords(lines[depth+1]).split(' ')

print("depth: ", depth)
print("breath: ", breath)
print(len(lines))
print("src 1: ", src[0])
