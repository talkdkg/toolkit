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
             _start_sw = Time.now
            logger.debug "Request ==== #{ request.params } "            
            _payload = request.raw_post
            _param_sort = request.params[:sort]
            logger.debug "param_sort ... #{ _param_sort }> "

            if (_payload.nil? && _param_sort.nil?)  
               @task.message = "No raw_post data found in Request."
               @task.status = "error"
            else  
               #  use params "sort" if the payload was not in the body 
               #  work around to use curl --data that places json in the params
               if (_payload.nil? && !_param_sort.nil?) 
                  _info = _param_sort 
               else
                  _info = JSON.parse(_payload)
               end 

               @task.data = _info["data"]
               @task.action = _info["action"]

               case @task.action
               when "NATIVE"
                  @task.result = @task.data.sort
                  @task.message = "#{@task.action} #{(Time.now - _start_sw).to_s} secs "
                  @task.message += ": #{@task.result.length.to_s} elements"   
                  @task.status = "success"
               else 
                  @task.message = "Unsupported action type, try NATIVE"
                  @task.status = "error"
               end  
            end 
            render :json => @task
         end #  create

      end
   end
end
