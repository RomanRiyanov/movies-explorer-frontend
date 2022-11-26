import Promo from "../Promo/Promo.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Techs from "../Techs/Techs.js";
import Portfolio from "../Portfolio/Portfolio.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";


function Main({ loggedIn }){

  return (
      <>
        <Header loggedIn={loggedIn}/>
          <main className="main__container" id="main__container">
            <Promo />
            <AboutProject />
            <Techs />
            <Portfolio />
          </main>
        <Footer/>
      </>
      );
    }
     
export default Main;
  