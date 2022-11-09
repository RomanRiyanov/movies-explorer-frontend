import React, { useEffect, useState } from "react";


import photoOnePath from '../../images/test_film_1.png';
const tittle = '33 слова о дизайне';
const duration = '1ч 44мин';

const baseUrl = 'https://api.nomoreparties.co';


function MoviesCard({movie, isSavedRoute, keyword}) {

    const [isMovieSaved, setMovieSaved] = useState(false);
    const [duration, setDuration] = useState('');

    const saveButtonClassName = (
        `moviesCard__saveButton ${isMovieSaved && 'moviesCard__saveButton_active'}`
    );

    const saveButtonDeleteClassName = 'moviesCard__saveButton moviesCard__saveButton_delete';

    const hoursAndMinutes = () => {
        if (movie.duration >= 60) {
            const hours = Math.floor(movie.duration/60);
            const minutes = movie.duration - hours*60;
            return `${hours} ч ${minutes} мин`
        } else return `${movie.duration} мин`;
    }
    
    function handleSave() {
        if (isSavedRoute) {
            console.log('удалить карточку с фильмом')
        }
        else {
            setMovieSaved(!isMovieSaved);
            console.log('сохранить карточку с фильмом');
        }
    }

    function handleImageClick() {
        console.log('card keyword ' + keyword);
    }
    useEffect(() => {
        setDuration(hoursAndMinutes());
    }, [])
    return (
        // <section className='moviesCard'>
        //     <div className="moviesCard__container">
        //         <div className='moviesCard__credits'>
        //             <h2 className='moviesCard__tittle'>{tittle}</h2>
        //             <p className='moviesCard__duration'>{duration}</p>
        //         </div>
        //         <button type="button" onClick={handleSave} aria-label='Сохранить фильм' className={isSavedRoute ? saveButtonDeleteClassName: saveButtonClassName}></button>
        //     </div>
        //     <img src={photoOnePath} className='moviesCard__photo' alt='Кадр из фильма'/>
        // </section>
        <section className='moviesCard'>
            <div className="moviesCard__container">
                <div className='moviesCard__credits'>
                    <h2 className='moviesCard__tittle'>{movie["nameRU"]}</h2>
                    <p className='moviesCard__duration'>{duration}</p>
                </div>
                <button type="button" onClick={handleSave} aria-label='Сохранить фильм' className={isSavedRoute ? saveButtonDeleteClassName: saveButtonClassName}></button>
            </div>
            <img onClick={handleImageClick} src={`${baseUrl}${movie.image.url}`} className='moviesCard__photo' alt='Кадр из фильма'/>
        </section>
    );
  }
  
  export default MoviesCard;
//   `${baseUrl}/movie.image.url`