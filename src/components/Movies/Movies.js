import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";

function Movies({movies, onMoviesFind, keyword}) {
    return (
        <section className="movies__container">
            <SearchForm onMoviesFind={onMoviesFind}/>
            <MoviesCardList movies={movies} keyword={keyword}/>
        </section>
    );
  }
  
  export default Movies;
  