RubySort
--------

* Does sorting for Tekst Project, runs on port :3000
* POST to <server>:3000/api/rest/sort

Overview
--------
config/routes.rb; link the resource to a controller
```
   namespace :api do
      namespace :rest do
         resources :sort
      end
   end
```

app/controllers/api/rest/sort_controller.rb; use `rake routes` to see the available routes; construct a data Class like "Task"
```
module Api 
   module Rest 
      class SortController < ApplicationController
         # POST action
         def create
            @task = Task.new
            _start_sw = Time.now
            _raw_post = request.raw_post
            _info = JSON.parse(_raw_post)
            ...
            @task.result = @task.data.sort
            render :json => @task
         end 
      end
   end
end
```

app/models/Task.rb Describe a model to be used in the Controller
```
class Task
   attr_accessor :action, :data, :result, :message, :status, :count 
   def initialize
      ...
   end
end

```

Testing
-------
```
curl -k -X POST http:localhost:3000/api/rest/sort -d "{\"action\" : \"SELECTION\", \"data\" : [\"This\", \"is\", \"a\", \"string\", \"to\", \"sort\" ]}"

```

