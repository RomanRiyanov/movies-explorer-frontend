import Header from "../Header/Header.js";
import Promo from "../Promo/Promo.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Techs from "../Techs/Techs.js";
import Portfolio from "../Portfolio/Portfolio.js";
import Footer from "../Footer/Footer.js";

function Main() {
    return (
        <div className="main__container">
          <Header />
          <Promo />
          <AboutProject />
          <Techs />
          <Portfolio />
          <Footer />
        </div>
    );
  }
  
  export default Main;
  