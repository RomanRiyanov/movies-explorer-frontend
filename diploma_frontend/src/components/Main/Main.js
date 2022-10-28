import Header from "../Header/Header.js";
import Promo from "../Promo/Promo.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Techs from "../Techs/Techs.js";
import Portfolio from "../Portfolio/Portfolio.js";

function Main() {
    return (
        <div className="main_container">
          <Header />
          <Promo />
          <AboutProject />
          <Techs />
          <Portfolio />
        </div>
    );
  }
  
  export default Main;
  