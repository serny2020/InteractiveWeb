## Improving efficiency of the react page

0. Build a Navigation Component that avoid refresh the page every time user 
wants to access a different page (update webpage manually)

1. `window.location.pathname` to get the pathname of the router
2. use `pushState()` to change the address path of the url, which will not cause
the webpage to refresh
    `window.history.pushState({}, '', '/accordion')`
3. use `popstate` to nevigate to the page that is pushState 
4. creates a link anchor component to display the content if the user click link
 on the website
5. useEffect and useState to effectively hide any component instead of refresh
the page

6. programmatic navigation: auto sign out to another webpage
