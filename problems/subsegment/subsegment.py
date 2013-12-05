#!/usr/bin/env python3
import pprint

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

pprint.pprint(matrix)
pprint.pprint(keywordArr)
pprint.pprint(segmentArr)


for x in range(0, depth):
   print("> row of matrix for  "  + " ".join(str(i) for i in matrix[x]))

# Update matrix with index of keyword finds

for x in range(0, depth):
   y = 0
   for i in range(0, len(segmentArr)):
      if segmentArr[i] == keywordArr[x]:
         print("Found x: " + str(x) + " y:" + str(y) + " @ " + str(i) + "  " + str(segmentArr[i]) + " for " + str(keywordArr[x]))
         matrix[x][y] = i
         y += 1  

for x in range(0, depth):
   print(" row of matrix for  " + " ".join(str(i) for i in matrix[x]))

pprint.pprint(matrix)
print("matrix 0,0", matrix[0][0])
print("matrix 3,2", matrix[3][2])

print("depth: ", depth)
print("breath: ", breath)
print(len(lines))
print("src 1: ", segmentArr[0])


