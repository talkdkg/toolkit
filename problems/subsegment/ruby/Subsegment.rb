class Subsegment

   def maxCountInArrays(keywordArr, segmentArr)
      num = 0
      keywordArr.each do |keyword|
         cnt = 0
         segmentArr.each do |segment|
            if keyword == segment
               #print keyword + " : " + segment + "\n"
               cnt = cnt +1
            end
         end
         if cnt > num
            num = cnt
         end
      end
      return num
   end

   def permute(arr, num, top, pos)
      quotient = num / top 
      remainder = num % top 
      arr[pos] = remainder
      if (quotient < top)
         arr[pos+1] = quotient
      end
      if (quotient >= top)
         permute(arr, quotient, top, pos+1)
      end
      return arr   
   end

   def shortestSubsegment(arr)
      shortest = []
      firstArr = arr[0]
      pos = firstArr.length()-1
      num = 9999 # get max int size for ruby 
      arr.each do |combo|
         if num > combo[pos]
            num = combo[pos]
            shortest = combo
         end
      end
      return shortest
   end

   def getResults(filename)
      if !File.file?(filename)  
         return []
      end
      lines = IO.readlines(filename) 
      if lines.empty?
         puts "ERROR reading " + filename
         return []
      end
      depth = lines[0].to_i
      keywordArr = lines.slice(1, depth).map {|x| x.chomp }
      segmentArr = lines[depth+1].gsub(/[^0-9a-zA-Z ]/, '').downcase.split(' ')
      breath = maxCountInArrays(keywordArr, segmentArr)
      num_possible = breath ** depth
      results = [] # catches all the matches 

      puts "segmentArr: " + segmentArr*" "
      puts "keywordsArr: " + keywordArr*" "
      puts "depth: " + depth.to_s
      puts "breath: " + breath.to_s
      puts "possible permutations: " + num_possible.to_s

      # Build matrix, then update with index of keyword finds
      matrix = Array.new(depth) { Array.new(breath) {-1}} #[[-1,-1,-1] x4 ]

      for x in 0..depth-1
         y = 0
         for i in 0..segmentArr.length
            if segmentArr[i] == keywordArr[x]
               puts "Found  " + i.to_s + " " + segmentArr[i]
               matrix[x][y] = i
               y = y +1
            end
         end
      end

      matrix.each {|r|
         r.each {|c|
            print c.to_s + " "
         }
         print "\n"
      }

      permutation = Array.new(depth, 0) # [0,0,0,0] 
      puts "permutation: " + permutation*" "

      for x in 0..num_possible -1
         arr = Array.new(depth+1) { -1 }
         combo = permute(permutation, x, breath, 0)
         for i in 0..depth-1
            c = combo[i]
            arr[i] = matrix[i][c]
         end

         distance =  arr.max - arr.min
         arr[depth] = distance
         puts arr*" "
   
         if !arr.include? -1
            results.push(arr)
         end
      end
      return results
   end

end

############################################## 
## Subsegment, Kyle Dinh 
## https://github.com/kyledinh/toolkit/blob/master/problems/subsegment/
## ruby 1.9.3p362 (2012-12-25 revision 38607) [x86_64-darwin12.4.0]
## usage example: ruby Subsegment alt.txt
############################################## 

ss = Subsegment.new

filename = "input.txt"
results = []

if !ARGV.empty? 
   filename = ARGV[0]
end

if !File.file?(filename)  
   puts "Program can not find your inputfile: " + filename + "."
else  
   results = ss.getResults(filename)
end 

# Final selection for results and display
if results.empty?
   puts "NO SUBSEGMENT FOUND"
else
   puts "Number of possible combos: " + results.length.to_s
   puts ss.shortestSubsegment(results)*" "
end
