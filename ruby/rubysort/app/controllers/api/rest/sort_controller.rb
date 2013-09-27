module Api 
   module Rest 
      class SortController < ApplicationController

      	 skip_before_filter :verify_authenticity_token

         def index
            @output = params.inspect 
            render :json => @output
         end

         def create
            @output = params.inspect
            render :json => @output
         end

      end
   end
end
