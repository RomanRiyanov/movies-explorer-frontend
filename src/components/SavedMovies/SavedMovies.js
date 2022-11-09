import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";

function SavedMovies() {
    return (
        <section className="movies__container">
            <SearchForm/>
            <MoviesCardList isSavedRoute={true}/>
        </section>
    );
  }
  
  export default SavedMovies;
  