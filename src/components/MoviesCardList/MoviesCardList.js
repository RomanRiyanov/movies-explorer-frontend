import React, {useEffect, useState} from "react";
import { Route, Switch} from 'react-router-dom';

import MoviesCard from '../MoviesCard/MoviesCard.js';
import { filterFilmByKeyword } from "../../utils/utils/filterFilmByKeyword.js";
import { filterFilmsByScreenWidth } from "../../utils/utils/filterFilmsByScreenWidth.js";
// import { filterFilmByIsSaved } from "../../utils/utils/filterFilmByIsSaved.js";
import { addedFilmCounter } from "../../utils/utils/addedFilmCounter.js";

function MoviesCardList({movies, keyword, short}) {

    const [width, setWidth] = useState(window.innerWidth);
    const [count, setCount] = useState(0);
    const [savedMovies, setSavedMovies] = useState([]);
    const [filteredMoviesLength, setFilteredMoviesLength] = useState(0);
    const [isMoreButtonDisabled, setMoreButtonDisabled] = useState(false);

    const moreButtonClassName = (isMoreButtonDisabled ? 'moviesCardList__moreMoviesButton button_inactive' : 'moviesCardList__moreMoviesButton');
    const keywordMovies = filterFilmByKeyword(movies, keyword, short);
    const filteredMovies = filterFilmsByScreenWidth(keywordMovies, width, count);
    
    function moreFilmsHandle () {
        const num = addedFilmCounter(width);
        setCount(count + num);
    }

    function hanldeSavedButton (movieId) {
        // const film = filterFilmByIsSaved(filteredMovies, isSaved, cardKey);
        //проверить, есть ли в savedMovies film - если нет, то добавить
        console.log(movieId);
        console.log('savedMovies');
        console.log(savedMovies);
        const film = filteredMovies.find(elem => elem.id === movieId);
        console.log('film');
        console.log(film);
        setSavedMovies(film);
        // if (film) {
        //     setSavedMovies((state) => {
        //         return state.map(((item) => item.id !== movieId ? film : item))
        //     });
        //     // setCards((oldCards) => {
        //     //     return oldCards.map((item) => item._id === card._id ? newCard : item)
        //     // })
        // }
    }

    useEffect(() => {
        function handleResize() {
            setTimeout(() => {setWidth(window.innerWidth)}, 1500);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [width]);

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
            <Switch>
                <Route exact path="/movies">
                <div className="moviesCardList__container">
                    {filteredMovies && filteredMovies.map((movie) => (
                        <MoviesCard 
                            key={movie.id} 
                            movie={movie} 
                            onSavedMovie={hanldeSavedButton}
                            savedMovies={savedMovies}
                        />
                    ))}
                </div>
                </Route>
                <Route exact path="/saved-movies">
                <div className="moviesCardList__container">
                    {savedMovies && savedMovies.map((movie) => (
                        <MoviesCard 
                            key={movie.id}
                            movie={movie} 
                            savedMovies={savedMovies}
                            onSavedMovie={hanldeSavedButton}
                        />
                    ))}
                </div>
                </Route>
            </Switch>
            <button 
                type="button"
                onClick={moreFilmsHandle}  
                className={moreButtonClassName}
                disabled={isMoreButtonDisabled}
            >Ещё
            </button>
        </section>
    );
  }
  
export default MoviesCardList;