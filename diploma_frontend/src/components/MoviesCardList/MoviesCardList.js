import MoviesCard from '../MoviesCard/MoviesCard.js'

function MoviesCardList({movies, isSavedRoute}) {
    return (
        <section className='moviesCardList'>
            <div className="moviesCardList__container">
                {/* {movies && movies.map((movie) => ( */}
                    <MoviesCard movies={movies} isSavedRoute={isSavedRoute}
                    // key={card._id} 
                    // card={card} 
                    // onCardClick={onCardClick} 
                    // onCardLike={onCardLike} 
                    // onCardDelete={onCardDelete} 
                    // isOpen={isOpen} 
                    // onCloseButton={onCloseButton}
                    // isLoaded={isLoaded}
                    />
                    <MoviesCard/>
                    <MoviesCard/>
                    <MoviesCard/>
                 {/* ))} */}
            </div>
            <button className='moviesCardList__moreMoviesButton'>Ещё</button>
        </section>
    );
  }
  
  export default MoviesCardList;
  