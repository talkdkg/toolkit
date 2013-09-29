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

            @task = Task.new

            _raw_post = request.raw_post
            _info = JSON.parse(_raw_post)
            _start_sw = Time.now

            @task.action = _info["action"]
            @task.data = _info["data"]

            case _info["action"]
            when "NATIVE"
               @task.result = @task.data.sort
               @task.message = "#{@task.action} #{(Time.now - _start_sw).to_s} secs "
               @task.message += ": #{@task.result.length.to_s} elements"   
               @task.status = "success"
            else 
               @task.message = "Unsupported action type, try NATIVE"
               @task.status = "error"
            end  

            render :json => @task
         end

      end
   end
end
