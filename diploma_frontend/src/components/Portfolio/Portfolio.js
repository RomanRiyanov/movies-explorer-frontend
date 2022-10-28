import LandingTittle from "../LandingTittle/LandingTittle";
import PortfolioLink from "../PortfolioLink/PortfolioLink";
import PortfolioPhotoPath from '../../images/Snoop-Dogg-2008.png';

function Portfolio () {
    return (
      <div className="container_portfolio">
            <LandingTittle tittle_text='Студент'/>
            <div className="portfolio_info">
                <div>
                    <h2 className="tittle_portfolio">Ромашка</h2>
                    <h3 className="subtittle_portfolio">Старший матрос</h3>
                    <p className="text_portfolio">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                    </p>
                    <a className="github_portfolio" href="https://github.com/RomanRiyanov">Github</a>
                </div>
                <img className="portfolioPhoto" src={PortfolioPhotoPath} alt='Фото студента Практикума'/>
            </div>
            <h3 className="subtittle_transparent ">Портфолио</h3>
            <PortfolioLink text='Статичный сайт'/>
            <PortfolioLink text='Адаптивный сайт'/>
            <PortfolioLink text='Одностраничное приложение'/>
      </div>    
    );
  }
  
  export default Portfolio;