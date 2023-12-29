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