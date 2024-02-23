# Dynamic Table Header
1. render the header with map function

    i. render the outer row first with map function

    ii. use a nested map to render the inner cells 

    iii. render function inside the config object is an arrow function

    iv. column that passed to the map function is HTML (number of columns)

2. keyFun is used to allow mapping to work (needs unique keys), but the callers
of such render should provide such key function.