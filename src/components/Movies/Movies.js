import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";

function Movies({onToolButtonClick}) {
    return (
        <section className="movies__container">
            <SearchForm/>
            <MoviesCardList/>
        </section>
    );
  }
  
  export default Movies;
  