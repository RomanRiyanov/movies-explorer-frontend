import Header from "../Header/Header.js";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.js";

function Movies() {
    return (
        <section className="movies__container">
            <Header/>
            <SearchForm/>
            <MoviesCardList/>
            <Footer />
        </section>
    );
  }
  
  export default Movies;
  