import Header from "../Header/Header.js";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.js";

function Movies({onToolButtonClick}) {
    return (
        <section className="movies__container">
            <Header onToolButtonClick={onToolButtonClick}/>
            <SearchForm/>
            <MoviesCardList/>
            <Footer />
        </section>
    );
  }
  
  export default Movies;
  