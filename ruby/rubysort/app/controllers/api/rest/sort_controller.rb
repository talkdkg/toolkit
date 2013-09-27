module Api 
   module Rest 
      class SortController < ApplicationController

      	skip_before_filter :verify_authenticity_token

         # GET method 
         def index
            @p = params.inspect 
            render :json => @p
         end

         # POST method 
         def create
            _start_sw = Time.now
            @task = Task.new

            _raw_post = request.raw_post
            _info = JSON.parse(_raw_post)

            @task.action = "NATIVE" #_info["action"]
            @task.data = _info["data"]
            @task.result = @task.data.sort
            @task.message = "#{@task.action} #{(Time.now - _start_sw).to_s} secs "
            @task.message += ": #{@task.result.length.to_s} elements"   

            #@task.message = "This is a test."
            render :json => @task
         end

      end
   end
end
