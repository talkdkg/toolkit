# rspec -v: 2.14.7
$LOAD_PATH << File.expand_path('..', __FILE__)

require 'Subsegment'

keyArr = ["a", "b", "c"]
segArr = ["a", "b", "b", "c", "c", "c", "d", "d","d","d"]
permArr = [0, 0, 0, 0] # Array.new(4,0)

describe Subsegment do
   ss = Subsegment.new
   it 'the max count should be 3 ' do
      expect(ss.maxCountInArrays(keyArr, segArr)).to eq 3 
   end
   it 'test the input.txt ' do
      lines = ss.fileLines('input.txt')
      expect(ss.shortestSubsegment(ss.getResults(lines))).to eq [0, 2, 3, 7, 8] 
   end
   it 'test the alt.txt ' do
      lines = ss.fileLines('alt.txt')
      expect(ss.shortestSubsegment(ss.getResults(lines))).to eq [4, 7, 11, 12] 
   end
   it 'test unit getResults  ' do
      lines = ["3", "this", "test", "programming", "Come all yee faithful. This is a test. This is a programming test. This is a programming test in any language. This is a test. This is a programming test. This is a programming test in any language."]
      expect(ss.shortestSubsegment(ss.getResults(lines))).to eq [4, 7, 11, 12] 
   end
   it 'testing finding 1 of 3  ' do
      lines = ["3", "big", "cat", "programming", "This is a test. This is a programming test. This is a programming test in any language. This is a test. This is a programming test. This is a programming test in any language."]
      expect(ss.shortestSubsegment(ss.getResults(lines))).to eq [] 
   end
   it 'test zero finds ' do
      lines = ["3", "big", "cat", "Alpha", "This is a test. This is a programming test. This is a programming test in any language."]
      expect(ss.shortestSubsegment(ss.getResults(lines))).to eq [] 
   end
   # for a 4x3 arr with 4 digit combo. There are 81 combos
   it 'test permute 0 ' do
      expect(ss.permute(permArr, 0, 3, 0)).to eq [0, 0, 0, 0] 
   end
   it 'test permute 1 ' do
      expect(ss.permute(permArr, 1, 3, 0)).to eq [1, 0, 0, 0] 
   end
   it 'test permute 3 ' do
      expect(ss.permute(permArr, 3, 3, 0)).to eq [0, 1, 0, 0] 
   end
   it 'test permute 9 ' do
      expect(ss.permute(permArr, 9, 3, 0)).to eq [0, 0, 1, 0] 
   end
   it 'test permute 27 ' do
      expect(ss.permute(permArr, 27, 3, 0)).to eq [0, 0, 0, 1] 
   end
   it 'test permute 80 ' do
      expect(ss.permute(permArr, 80, 3, 0)).to eq [2, 2, 2, 2] 
   end

end
