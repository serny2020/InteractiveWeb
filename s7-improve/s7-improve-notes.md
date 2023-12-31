# Album Display App

## Data Flow
```
App            --> Provider
├─ AlbumCreate       ⤴
└─ AlbumList         ⤴
   ├─ AlbumShow      ⤴
   └─ AlbumShow      ⤴
      ├─ AlbumEdit   ⤴
      └─ AlbumEdit   ⤴
```


## React Context
- context is an alternative to the props system
- allow many of the components to share the data even if they don't have direct
link to each other
- context object contains a provider, used to specify what data need to be share
, and a consumer used to get access to data
- to update the context data and take the advantage of the state system, 
the app used a new component provider (for displaying and rerendering the state) 
that wrap context provider (sharing the data across different child components)


## Classifying the State for context
- Application state: use across different components (state should be inside the
context)
- Component state: only used within a few components 
- made a custom hook to put useContext into a sperate file to achieve modularity

## Fixing ESLint issue
- ESLint gives warning about useEffect does not have dependency in the array
- However, every time when useEffect calls the arrow function, it calls
the request and update the state system. This will make react to rerender. 
The rerender creates a new arrow function at different location inside the 
memory, even with the same name in the dependency array. useEffect detect the 
difference in the array by comparing the current address with the earlier one, 
so call the arrow function again which becomes an infinite loop.
- useCallback when provided with an empty array as the second argument,
it will throw away the earlier state in memory. Since there is only one state
in memory, the state remaind the same.
- So add useCallback to the parent component, which capture the stable version of 
state from the child props. 
- this ensures the useEffect only rerender when the most recent state changes
- Some note about calling the modal and dropdown: after creating a new event 
handler, remember to clean up the event handler.