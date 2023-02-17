import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import UseFetch from "../hooks/UseFetch";

export const Search = ({apiPath}) => {
  const [ searchParams ] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const {data: movies } = UseFetch(apiPath, queryTerm);
  return (
    <main>
      <section>
        <p className="text-3xl text-gray-700 dark:text-white">{ movies.length === 0 ? `No Result Found For ${queryTerm}` : `Result For ${queryTerm}`}</p>
      </section>
    <section className="max-w-7xl mx-auto py-7">
      <div className="flex justify-start flex-wrap">
        { movies.map((movie)=>(

         <Card key={movie.id} movie={movie}/>     
        ))}
           
      </div>
    </section>
    </main>
  )
}


