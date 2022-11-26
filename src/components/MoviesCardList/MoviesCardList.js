import React, {useEffect, useState, useContext, useMemo} from "react";
import { Route, Switch } from 'react-router-dom';

import MoviesCard from '../MoviesCard/MoviesCard.js';
import {CurrentUserContext} from '../context/CurrentUserContext';
import { filterFilmByKeyword } from "../../utils/utils/filterFilmByKeyword.js";
import { filterFilmsByScreenWidth } from "../../utils/utils/filterFilmsByScreenWidth.js";
import { addedFilmCounter } from "../../utils/utils/addedFilmCounter.js";

function MoviesCardList({
    movies, 
    keyword,
    keywordSavedMovies,
    short, 
    onSaveMovie, 
    onDeleteMovie, 
    firstIterationMovies,
}) {

    const currentUser = useContext(CurrentUserContext);
    
    const [width, setWidth] = useState(window.innerWidth);
    const [count, setCount] = useState(0);
    const [keywordSavedMoviesState, setKeywordSavedMoviesState] = useState('');

    const savedMovies = useMemo(() => firstIterationMovies.filter(item => item.owner === currentUser.id), [firstIterationMovies, currentUser])
    
    const [filteredMoviesLength, setFilteredMoviesLength] = useState(0);
    const [isMoreButtonDisabled, setMoreButtonDisabled] = useState(false);

    const moreButtonClassName = (isMoreButtonDisabled ? 'moviesCardList__moreMoviesButton button_inactive' : 'moviesCardList__moreMoviesButton');

    const keywordMovies = filterFilmByKeyword(movies, keyword, short);
    const filteredMovies = filterFilmsByScreenWidth(keywordMovies, width, count);

    const keywordSavedMoviesArr = filterFilmByKeyword(savedMovies, keywordSavedMoviesState, short);
    const filteredSavedMovies = filterFilmsByScreenWidth(keywordSavedMoviesArr, width, count);

    function moreFilmsHandle () {
        const num = addedFilmCounter(width);
        setCount(count + num);
    }

    function hanldeSavedButton (movieId) {
        const film = filteredMovies.find(elem => (elem.movieId ?? elem.id) === movieId);
        const filmSaved = savedMovies.find(elem => (elem.movieId ?? elem.id) === movieId);
        
        if (!filmSaved) {
            onSaveMovie(film);
        } else onDeleteMovie(movieId);
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
    }, [keywordMovies, filteredMovies, filteredMoviesLength]);

    useEffect(() => {
        setKeywordSavedMoviesState(keywordSavedMovies);
    }, [keywordSavedMovies]);

    useEffect(() => {
        setKeywordSavedMoviesState('');
    }, []);
  
    return (
        <section className='moviesCardList'>
            <Switch>
                <Route exact path="/movies">
                {keywordMovies.length !== 0 ? 
                    (<div className="moviesCardList__container">
                        {filteredMovies && filteredMovies.map((movie) => (
                            <MoviesCard 
                                key={movie.id} 
                                movie={movie} 
                                onSaveMovie={hanldeSavedButton}
                                savedMovies={savedMovies}
                            />
                        ))}
                    </div>) : <h2 style={{fontWeight: 400, fontSize: 30}}>По Вашему запросу ничего не найдено</h2> }
                <button 
                    type="button"
                    onClick={moreFilmsHandle}  
                    className={moreButtonClassName}
                    disabled={isMoreButtonDisabled}
                >Ещё
                </button>
                </Route>
                <Route exact path="/saved-movies">
                {filteredSavedMovies.length !== 0 ? 
                    (<div className="moviesCardList__container">
                        
                        {filteredSavedMovies && filteredSavedMovies.map((movie) => (
                            <MoviesCard 
                                key={movie.movieId ? movie.movieId : movie.id}
                                movie={movie} 
                                savedMovies={savedMovies}
                                onSaveMovie={hanldeSavedButton}
                            />
                        ))}
                    </div>) : <h2 style={{fontWeight: 400, fontSize: 30}}>По Вашему запросу ничего не найдено</h2> }
                </Route>
            </Switch>
        </section>
    );
  }
  
export default MoviesCardList;