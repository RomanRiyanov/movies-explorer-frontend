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
    keywordSavedMovies,
    onSaveMovie, 
    onDeleteMovie, 
    onMountAllSavedMovies, 
    firstIterationMovies,
    onToolButtonClick,
    isPreloaderOpen,
    loggedIn
}) {
    const [isShort, setIsShort] = useState(false);

    function onFilmShort () {
        setIsShort((state) => !state);
        localStorage.setItem('localStorageShort', !isShort)
    }
    
    useEffect(() => {
        setIsShort(localStorage.getItem('localStorageShort') === 'true');
      }, [])

    return (
        <section className="movies__route">
        <Header onToolButtonClick={onToolButtonClick} loggedIn={loggedIn}/>
            <main className="movies__container">
                <SearchForm 
                    onMoviesFind={onMoviesFind} 
                    onShortFolmSelect={onFilmShort}
                    short={isShort}
                />
                {isPreloaderOpen ? 
                    <Preloader /> :

                    <MoviesCardList 
                        movies={movies} 
                        keyword={keyword}
                        keywordSavedMovies={keywordSavedMovies}
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
  