#!/usr/bin/env python3
import unittest
from algorithms import * 

class InsertionSortTest(unittest.TestCase):

   def testOne(self):
      before = ["bill", "dave", "abby", "cammy"]
      after = insertionSort(before)
      expect = ["abby", "bill", "cammy", "dave"]
      self.assertTrue(after == expect)

   def testTwo(self):
      before = [8, 3, 6, 1, 4]
      after = insertionSort(before)
      expect = [1, 3, 4, 6, 8]
      self.assertTrue(after == expect)

class SelectionSortTest(unittest.TestCase):

   def testOne(self):
      before = ["bill", "dave", "abby", "cammy"]
      after = selectionSort(before)
      expect = ["abby", "bill", "cammy", "dave"]
      self.assertTrue(after == expect)

   def testTwo(self):
      before = [8, 3, 6, 1, 4]
      after = selectionSort(before)
      expect = [1, 3, 4, 6, 8]
      self.assertTrue(after == expect)


def main():
   unittest.main()

if __name__ == '__main__':
   main()
