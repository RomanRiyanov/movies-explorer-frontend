import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";

function SavedMovies({movies, onMoviesFind, keyword, loggedIn}) {
    const [isShort, setIsShort] = useState(false);

    function isFilmShort (checkBoxSelected) {
        setIsShort(checkBoxSelected);
    }
    
    return (
        <section className="movies__container">
            <SearchForm onMoviesFind={onMoviesFind} onShortFolmSelect={isFilmShort}/>
            <MoviesCardList isSavedRoute={true} movies={movies} keyword={keyword} short={isShort}/>
        </section>
    );
  }
  
  export default SavedMovies;
  