import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

function Movies({
    movies, 
    onMoviesFind, 
    keyword, 
    onSaveMovie, 
    onDeleteMovie, 
    onMountAllSavedMovies, 
    firstIterationMovies,
    onToolButtonClick
}) {
    const [isShort, setIsShort] = useState(false);

    function isFilmShort (checkBoxSelected) {
        setIsShort(checkBoxSelected);
    }
    
    return (
        <>
        <Header onToolButtonClick={onToolButtonClick}/>
            <section className="movies__container">
                <SearchForm 
                    onMoviesFind={onMoviesFind} 
                    onShortFolmSelect={isFilmShort}
                />
                <MoviesCardList 
                    movies={movies} 
                    keyword={keyword} 
                    short={isShort} 
                    onSaveMovie={onSaveMovie} 
                    onDeleteMovie={onDeleteMovie} 
                    onMountAllSavedMovies={onMountAllSavedMovies} 
                    firstIterationMovies={firstIterationMovies}
                />
            </section>
        <Footer/>
        </>
    );
  }
  
  export default Movies;
  