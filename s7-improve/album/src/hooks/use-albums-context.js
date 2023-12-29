import { useContext } from "react";
import AlbumsContext from "../context/albums";

// custom hooks that factor out useContext from all the other components
// note: components which use this hook should invoke as a function call
// (not a props with call back nor a Context system with function reference) 
function useAlbumsContext() {
    return useContext(AlbumsContext)
}

export default useAlbumsContext