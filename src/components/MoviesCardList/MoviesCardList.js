import React, {useEffect, useState} from "react";

import MoviesCard from '../MoviesCard/MoviesCard.js'

function MoviesCardList({movies, isSavedRoute, keyword}) {

    return (
        <section className='moviesCardList'>
            <div className="moviesCardList__container">
                {movies && movies.map((movie) => (
                    <MoviesCard 
                        key={movie.id} 
                        movie={movie} 
                        isSavedRoute={isSavedRoute}
                        keyword={keyword}
                    />
                ))}
            </div>
            <button type="button" className='moviesCardList__moreMoviesButton'>Ещё</button>
        </section>
    );
  }
  
  export default MoviesCardList;
  