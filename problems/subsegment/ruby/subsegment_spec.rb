$LOAD_PATH << File.expand_path('..', __FILE__)

require 'Subsegment'

keyArr = ["a", "b", "c"]
segArr = ["a", "b", "b", "c", "c", "c", "d", "d","d","d"]

describe Subsegment do
   ss = Subsegment.new
   it 'the max count should be 3 ' do
      expect(ss.maxCountInArrays(keyArr, segArr)).to eq 3 
   end
   it 'test the input.txt ' do
      expect(ss.shortestSubsegment(ss.getResults('input.txt'))).to eq [0, 2, 3, 7, 8] 
   end

   it 'test the alt.txt ' do
      expect(ss.shortestSubsegment(ss.getResults('alt.txt'))).to eq [4, 7, 11, 12] 
   end
end

