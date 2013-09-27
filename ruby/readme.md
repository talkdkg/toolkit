RubySort
--------

* Does sorting for Tekst Project, runs on port :3000
* POST to <server>:3000/api/rest/sort


Testing
-------
```
curl -k -X POST http:localhost:3000/api/rest/sort -d "{\"action\" : \"SELECTION\", \"data\" : [\"This\", \"is\", \"a\", \"string\", \"to\", \"sort\" ]}"

```

