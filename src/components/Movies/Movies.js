import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Preloader from '../Preloader/Preloader.js';

function Movies({
    movies, 
    onMoviesFind, 
    keyword, 
    onSaveMovie, 
    onDeleteMovie, 
    onMountAllSavedMovies, 
    firstIterationMovies,
    onToolButtonClick,
    isPreloaderOpen
}) {
    const [isShort, setIsShort] = useState(false);

    function isFilmShort (checkBoxSelected) {
        setIsShort(checkBoxSelected);
        localStorage.setItem('localStorageShort', checkBoxSelected)
    }
    
    return (
        <section className="movies__route">
        <Header onToolButtonClick={onToolButtonClick}/>
            <main className="movies__container">
                <SearchForm 
                    onMoviesFind={onMoviesFind} 
                    onShortFolmSelect={isFilmShort}
                />
                {isPreloaderOpen ? 
                    <Preloader /> :

                    <MoviesCardList 
                        movies={movies} 
                        keyword={keyword} 
                        short={isShort} 
                        onSaveMovie={onSaveMovie} 
                        onDeleteMovie={onDeleteMovie} 
                        onMountAllSavedMovies={onMountAllSavedMovies} 
                        firstIterationMovies={firstIterationMovies}
                    />
                }
            </main>
        <Footer/>
        </section>
    );
  }
  
  export default Movies;
  