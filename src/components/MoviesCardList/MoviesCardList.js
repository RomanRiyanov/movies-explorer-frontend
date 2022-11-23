import React, {useEffect, useState, useContext} from "react";
import { Route, Switch } from 'react-router-dom';

import MoviesCard from '../MoviesCard/MoviesCard.js';
import {CurrentUserContext} from '../context/CurrentUserContext';
import { filterFilmByKeyword } from "../../utils/utils/filterFilmByKeyword.js";
import { filterFilmsByScreenWidth } from "../../utils/utils/filterFilmsByScreenWidth.js";
import { addedFilmCounter } from "../../utils/utils/addedFilmCounter.js";

function MoviesCardList({
    movies, 
    keyword, 
    short, 
    onSaveMovie, 
    onDeleteMovie, 
    firstIterationMovies,
}) {

    const currentUser = useContext(CurrentUserContext);

    const [width, setWidth] = useState(window.innerWidth);
    const [count, setCount] = useState(0);
    const [savedMovies, setSavedMovies] = useState([]);
    
    const [filteredMoviesLength, setFilteredMoviesLength] = useState(0);
    const [isMoreButtonDisabled, setMoreButtonDisabled] = useState(false);

    const moreButtonClassName = (isMoreButtonDisabled ? 'moviesCardList__moreMoviesButton button_inactive' : 'moviesCardList__moreMoviesButton');

    const keywordMovies = filterFilmByKeyword(movies, keyword, short);
    const filteredMovies = filterFilmsByScreenWidth(keywordMovies, width, count);

    const keywordSavedMoviesArr = filterFilmByKeyword(savedMovies, keyword, short);
    const filteredSavedMovies = filterFilmsByScreenWidth(keywordSavedMoviesArr, width, count); 
    
    function moreFilmsHandle () {
        const num = addedFilmCounter(width);
        setCount(count + num);
    }

    function hanldeSavedButton (movieId) {
        const film = filteredMovies.find(elem => (elem.movieId ?? elem.id) === movieId);
        const filmSaved = savedMovies.find(elem => (elem.movieId ?? elem.id) === movieId);
        
        if (!filmSaved) {
            onSaveMovie(film)
                .then((res) => {
                    if (res) {
                        setSavedMovies(state => [...state, film]);
                        console.log('фильм сохранен на сервер');
                        return res;
                    } throw new Error();
                })
                .catch(err => {
                    console.log('Ошибка при сохранении фильма ' + err);
                });
            } 
        else onDeleteMovie(movieId)
                .then((res) => {
                    if (res) {
                        setSavedMovies(state => {return state.filter((item) => (item.movieId ?? item.id) !== movieId)});
                        return res;
                    } throw new Error();
                })
                .catch(err => {
                    console.log('Ошибка при удалении фильма ' + err);
                });
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
    }, [keywordMovies, filteredMovies, filteredMoviesLength])

    useEffect(() => {
        const onlyCurrentUserMovies = firstIterationMovies.filter(item => item.owner === currentUser.id);
        setSavedMovies(onlyCurrentUserMovies);
    }, [])

    // useEffect(() => {
    //     setKeywordMoviesState([]);
    // }, )

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