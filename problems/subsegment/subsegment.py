#!/usr/bin/env python3
import pprint
import math

def trimWords(words):
   return words.replace(',', '').replace('.','').lower()

def maxCountInArrays(keywordArr, segmentArr):
   num = 0
   for i in range(0, len(keywordArr)-1):
      cnt = 0
      for j in range(0, len(segmentArr)-1):
         if keywordArr[i] == segmentArr[j]:
            cnt += 1
      if cnt > num:
         num = cnt
   return num

def readFileToArray(path):
   f = open(path)
   arr = [line.strip() for line in f] 
   f.close()
   return arr

def treeify(arr, num, top, pos):
   quotient = num / top
   remainder = num % top
   arr[pos] = remainder
   if (quotient < top):
      arr[pos+1] = quotient
   if (quotient >= top):
      treeify(arr, quotient, top, pos+1)
   return arr


## Written by: Kyle Dinh @ https://github.com/kyledinh/toolkit/tree/master/problems/subsegment 
## keywordArr holds the wanted elements for the sub-segment
## segmentArr is the master segment or source segment

lines = readFileToArray('input.txt')
depth = int(lines[0])
keywordArr = lines[1:depth+1]
segmentArr = trimWords(lines[depth+1]).split(' ')
breath = maxCountInArrays(keywordArr, segmentArr) 

# Build matrix with the default -1 value
matrix = [[-1 for i in range(breath)] for i in range(depth)]

print("matrix 0,0", matrix[0][0])
print("matrix 3,2", matrix[3][2])

print("depth: ", depth)
print("breath: ", breath)
print(len(lines))
print("src 1: ", segmentArr[0])

pprint.pprint(matrix)
pprint.pprint(keywordArr)
pprint.pprint(segmentArr)

# Update matrix with index of keyword finds

for x in range(0, depth):
   y = 0
   for i in range(0, len(segmentArr)):
      if segmentArr[i] == keywordArr[x]:
         print("Found x: " + str(x) + " y: " + str(y) + " @ " + str(i) + "  " + str(segmentArr[i]) + " for " + str(keywordArr[x]))
         matrix[x][y] = i
         y += 1  

for x in range(0, depth):
   print(" row of matrix for  " + " ".join(str(i) for i in matrix[x]))

pprint.pprint(matrix)

permutation = [0]*depth
pprint.pprint(permutation)

results = []
num_possible = int(math.pow(breath, depth))

print("total possible: " + str(num_possible))

for x in range(0, num_possible):
   #arr = [-1 for x in range(depth)]
   n = depth+1
   arr = [-1]*n
   combo = treeify(permutation, x, breath, 0)

   for i in range(0, depth):
      c = int(combo[i])
      #print(matrix[i][c])
      arr[i] = matrix[i][c]

   distance = max(arr) - min(arr)
   arr[depth] = distance

   if (-1 not in arr):
      results.append(arr)


pprint.pprint(results)

