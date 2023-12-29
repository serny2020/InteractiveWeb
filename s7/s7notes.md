# Album Display App


```
App
├─ AlbumCreate
└─ AlbumList 
   ├─ AlbumShow
   └─ AlbumShow
      ├─ AlbumEdit
      └─ AlbumEdit
```


## Connect to Server
- install the server with `install json-server`
 - add script to json.package `"server": "json-server -p 3001 --watch db.json"`
 to create a command to run JSON database server
 - use rest client API to conenct to server
 - use Axios to handle request
 - **useEffect** to help avoid the infinite loop of fetching requests
    - if 2nd argument is an empty array, useEffect only allow react to render
    after the first call to the arrow function
    - if 2nd argument is omitted, then this allow react to call the arrow 
    function be called everytime
    - if there is something inside the array, then after the first call,
    useEffect allow the next call only when the thing (state) in the array is
    changed