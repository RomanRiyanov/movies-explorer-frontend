import React, { useEffect, useState, useMemo } from "react";
import { Route, Switch } from "react-router-dom";

const baseUrl = 'https://api.nomoreparties.co';

function MoviesCard({ movie, onSavedMovie, savedMovies}) {

    const [duration, setDuration] = useState('');

    const isMovieSaved = useMemo(() => savedMovies.find(film => film.id === movie.id), [movie, savedMovies])

    const saveButtonDeleteClassName = 'moviesCard__saveButton moviesCard__saveButton_delete';
    const saveButtonClassName = (
        `moviesCard__saveButton ${isMovieSaved && 'moviesCard__saveButton_active'}`
    );

    function hoursAndMinutes () {
        if (movie.duration >= 60) {
            const hours = Math.floor(movie.duration / 60);
            const minutes = movie.duration - hours * 60;
            return `${hours} ч ${minutes} мин`
        } else return `${movie.duration} мин`;
    }
    
    function handleSaveClick() {
        console.log('сохранить карточку с фильмом');
        return onSavedMovie(movie.id);
    }

    function handleImageClick() {
        console.log('пириход на ютубчик');
    }
    
    useEffect(() => {
        setDuration(hoursAndMinutes());
    }, [])
    
    return (
        <section className='moviesCard'>
            <div className="moviesCard__container">
                <div className='moviesCard__credits'>
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
            <img onClick={handleImageClick} src={`${baseUrl}${movie.image.url}`} className='moviesCard__photo' alt='Кадр из фильма'/>
        </section>
    );
  }
  
  export default MoviesCard;