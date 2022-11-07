import Promo from "../Promo/Promo.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Techs from "../Techs/Techs.js";
import Portfolio from "../Portfolio/Portfolio.js";

function Main() {
    return (
        <section className="main__container" id="main__container">
          <Promo />
          <AboutProject />
          <Techs />
          <Portfolio />
        </section>
    );
  }
  
  export default Main;
  