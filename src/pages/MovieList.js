
import { Card } from "../components";
import UseFetch from "../hooks/UseFetch";

export const MovieList = ({apiPath}) => {

    
    const {data: movies } = UseFetch(apiPath);
  return (
    <main>
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





