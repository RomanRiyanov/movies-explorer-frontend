import Promo from "../Promo/Promo.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Header from "../Header/Header.js";

function Main() {
    return (
        <div className="main_container">
          <Header />
          <Promo />
          <AboutProject />
        </div>
    );
  }
  
  export default Main;
  