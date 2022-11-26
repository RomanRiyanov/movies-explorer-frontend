import React, { useEffect, useState, useMemo } from "react";
import { Route, Switch } from "react-router-dom";

const baseUrl = 'https://api.nomoreparties.co';

function MoviesCard({ movie, onSaveMovie, savedMovies}) {
    const [duration, setDuration] = useState('');
    const [imageSrcRoute, setimageSrcRoute] = useState('');

    const isMovieSaved = useMemo(() => savedMovies.find((film) => {
        return (film.movieId ?? film.id) === (movie.id ?? movie.movieId)}), [movie, savedMovies])

    const saveButtonDeleteClassName = 'moviesCard__saveButton moviesCard__saveButton_delete';
    const saveButtonClassName = (
        `moviesCard__saveButton ${isMovieSaved && 'moviesCard__saveButton_active'}`
    );
    
    function defineimageSrcRoute () {
        if (typeof movie.image === 'object') return `${baseUrl}${movie.image.url}`;
        else return movie.image;
    }

    function hoursAndMinutes () {
        if (movie.duration >= 60) {
            const hours = Math.floor(movie.duration / 60);
            const minutes = movie.duration - hours * 60;
            return `${hours} ч ${minutes} мин`
        } else return `${movie.duration} мин`;
    }
    
    function handleSaveClick() {
        console.log('сохранить карточку с фильмом');
        return onSaveMovie(movie.id || movie.movieId);
    }
    
    useEffect(() => {
        setDuration(hoursAndMinutes());
    }, [])

    useEffect(() => {
        setimageSrcRoute(defineimageSrcRoute());
    }, [])
    
    return (
        <section className='moviesCard'>
            <div className="moviesCard__container">
                <div className='moviesCard__credits'>
                    <span className="moviesCard__description">{movie.description}</span>
                    <h2 className='moviesCard__tittle'>{movie["nameRU"]}</h2>
                    <p className='moviesCard__duration'>{duration}</p>
                </div>
                <Switch>
                    <Route exact path='/movies'>
                        <button type="button" onClick={handleSaveClick} aria-label='Сохранить фильм' className={saveButtonClassName}></button>
                    </Route>
                    <Route exact path='/saved-movies'>
                        <button type="button" onClick={handleSaveClick} aria-label='Сохранить фильм' className={saveButtonDeleteClassName}></button>
                    </Route>
                </Switch>
            </div>
            <a className="moviesCard__photo_container" target="_blank" rel="noopener noreferrer" href={movie.trailerLink}>
                <img src={imageSrcRoute} className='moviesCard__photo' alt='Кадр из фильма'/>
            </a>
        </section>
    );
  }
  
  export default MoviesCard;