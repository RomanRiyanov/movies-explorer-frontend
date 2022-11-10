import React, {useEffect, useState} from "react";

import MoviesCard from '../MoviesCard/MoviesCard.js';
import { filterFilmByKeyword } from "../../utils/utils/filterFilmByKeyword.js";
import { filterFilmsByScreenWidth } from "../../utils/utils/filterFilmsByScreenWidth.js";
import { addedFilmCounter } from "../../utils/utils/addedFilmCounter.js";

function MoviesCardList({movies, isSavedRoute, keyword, short}) {

    const [width, setWidth] = useState(window.innerWidth);
    const [count, setCount] = useState(0);
    const [filteredMoviesLength, setFilteredMoviesLength] = useState(0);
    const [isMoreButtonDisabled, setMoreButtonDisabled] = useState(false);

    const keywordMovies = filterFilmByKeyword(movies, keyword, short);
    const filteredMovies = filterFilmsByScreenWidth(keywordMovies, width, count);

    // console.log(keywordMovies.length);

    useEffect(() => {
        function handleResize() {
            setTimeout(() => {setWidth(window.innerWidth)}, 1500);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [width]);

    function moreFilmsHandle () {
        const num = addedFilmCounter(width);
        setCount(count + num);


        // setFilteredMoviesLength(filteredMovies.length);

        // console.log(keywordMovies.length);
        // console.log(filteredMovies.length);

        // if (keywordMovies.length === filteredMovies.length) {
        //     setMoreButtonDisabled(true);
        // } else if (keywordMovies.length !== filteredMovies.length) {
        //     setMoreButtonDisabled(false)
        // };
    }

    useEffect(() => {
        setFilteredMoviesLength(filteredMovies.length);
        
        if (keywordMovies.length === filteredMoviesLength) {
            setMoreButtonDisabled(true);
        } else if (keywordMovies.length !== filteredMoviesLength) {
            setMoreButtonDisabled(false)
        };
    }, [keywordMovies])

    return (
        <section className='moviesCardList'>
            <div className="moviesCardList__container">
                {filteredMovies && filteredMovies.map((movie) => (
                    <MoviesCard 
                        key={movie.id} 
                        movie={movie} 
                        isSavedRoute={isSavedRoute}
                        keyword={keyword}
                    />
                ))}
            </div>
            <button 
                type="button"
                onClick={moreFilmsHandle}  
                // className={`moviesCardList__moreMoviesButton`}
                className={isMoreButtonDisabled ? 'moviesCardList__moreMoviesButton button_inactive' : 'moviesCardList__moreMoviesButton'}
                // className={`moviesCardList__moreMoviesButton ${isMoreButtonDisabled || 'button_inactive'}`}
                disabled={isMoreButtonDisabled}
            >Ещё
            </button>
        </section>
    );
  }
  
export default MoviesCardList;
// {`moviesCardList__moreMoviesButton ${isMoreButtonDisabled || 'button_inactive'}`}

// {isMoreButtonDisabled ? 'moviesCardList__moreMoviesButton button_inactive' : 'moviesCardList__moreMoviesButton'}