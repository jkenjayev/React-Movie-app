import Movie from "./Movie.js";

export default function Movies(props) {
  const { movies = [] } = props;

  return(
    <div className="movies">
      {movies.length ? 
        movies.map(movie => (
          <Movie key={movie.imdbID} {...movie}/>
        )) : <h3>No thing found !!!</h3>}
    </div>
  )
}