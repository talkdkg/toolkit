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

            info = request.raw_post
            jnfo = JSON.parse(info)

            @task.action = jnfo["action"]
            @task.data = jnfo["data"]
            @task.result = @task.data.sort
            @task.message = @task.result.length

            #@task.message = "This is a test."
            render :json => @task
         end

      end
   end
end
