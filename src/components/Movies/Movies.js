import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";

function Movies({movies, onMoviesFind, keyword}) {
    const [isShort, setIsShort] = useState(false);

    function isFilmShort (checkBoxSelected) {
        setIsShort(checkBoxSelected);
    }

    return (
        <section className="movies__container">
            <SearchForm onMoviesFind={onMoviesFind} onShortFolmSelect={isFilmShort}/>
            <MoviesCardList movies={movies} keyword={keyword} short={isShort}/>
        </section>
    );
  }
  
  export default Movies;
  