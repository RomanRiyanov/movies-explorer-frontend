import Header from "../Header/Header.js";
import Promo from "../Promo/Promo.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Techs from "../Techs/Techs.js";

function Main() {
    return (
        <div className="main_container">
          <Header />
          <Promo />
          <AboutProject />
          <Techs />
        </div>
    );
  }
  
  export default Main;
  