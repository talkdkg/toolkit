class Task
   attr_accessor :action, :data, :result, :message, :status, :count 
  
   def initialize
      @status = "NEW"
   end
end
