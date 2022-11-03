import Header from "../Header/Header.js";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.js";

function SavedMovies({onToolButtonClick}) {
    return (
        <section className="movies__container">
            <Header onToolButtonClick={onToolButtonClick}/>
            <SearchForm/>
            <MoviesCardList /*movies={movies}*/ isSavedRoute={true}/>
            <Footer />
        </section>
    );
  }
  
  export default SavedMovies;
  