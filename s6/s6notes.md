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


## Components
1. App: main component integrate all the other components and  keep track of the app state
and AlbumList
2. AlbumCreate: at the bottom of the website to allow the user add a new album 
to the list 
3. AlbumList: disply the list of AlbumShow on the website
4. AlbumShow: individual Album element inside the AlbumShow list
5. AlbumEdit: user can taggle the edit button to edit the existing albumn

## Updating States in React
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

## Design of Edit Album Show
- when user click on the edit button, the albumShow should change to edit mode
- use state system to change between edit mode and display mode
- onEdit is a reference to the callback function editBookById, which passed to 
the children as props
- factoring: combine the props of entering the edit mode (setShowEdit)
 and editing the album (onEdit) into a single props(onSubmit) that AlbumShow
 passed to AlbumEdit

 ## Add images
 - album image is from [picsum](https://picsum.photos/)
 - use js string interpretation to create a random picture
