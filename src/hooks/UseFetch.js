import { useState, useEffect } from "react";


const UseFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    const url= `https://api.themoviedb.org/3/${apiPath}?api_key=8d765a7af5bb026696eb25ce691b94f6&language=en-US&page=1&query=${queryTerm}`
    useEffect(() => {
        async function fetchMovies(){
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
        }
        fetchMovies();
    }, [url])
  return { data }
}

export default UseFetch
