# Album Display App
## Components
1. App: main driver component integrate the AlbumCreate and AlbumList component
which keep track of the app state
and AlbumList
2. AlbumCreate: at the bottom of the website to allow the user add a new album 
to the list 
3. AlbumList: disply the list of AlbumShow on the website
4. AlbumShow: individual Album element inside the AlbumShow list
5. AlbumEdit: user can taggle the edit button to edit the existing albumn

## Updating States with Control System in React
- react can only render the object if they are different
    - for the array and object, it is important to make a new one instead of
    modifying the existing one to allow the react to rerender.
    - the primative types won't have this rendering issue.
    - for the array, take extra care about making new elements inside the array
    whenever the element needs to be update, because react will not rerender 
    the element if it was modified instead of creating a new one.
    - some [technique](https://state-updates.vercel.app/) of 
    inserting, changing, removing the array or object including using map, 
    filter and destructuring feature of js. 
        - the ... operator in js list means to copy and create a new array
        - map and filter returns a new list
