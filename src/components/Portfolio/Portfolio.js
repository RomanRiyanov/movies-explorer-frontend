import LandingTittle from "../LandingTittle/LandingTittle";
import PortfolioLink from "../PortfolioLink/PortfolioLink";
import PortfolioPhotoPath from '../../images/avatar.jpg';

function Portfolio () {
    return (
      <section className="container__portfolio">
            <LandingTittle tittle__text='Студент'/>
            <div className="portfolio__info">
                <div>
                    <h2 className="tittle__portfolio">Риянов Роман</h2>
                    <h3 className="subtittle__portfolio">Фронтенд-разработчик</h3>
                    <p className="text__portfolio">
                    Успешно работал авиационным инженером, но столкнулся с потолком для роста. 
                    Переквалифицировался в разработчика: фронтенд привлекает меня широким спектром применения 
                    и осязаемыми результатами своей работы.
                    
                    <br/>Имею опыт некоммерческой работы в команде из 10+ человек над серьезными проектами, дедлайны, пулл-реквесты 
                    и ревью для меня не пустой звук. Выполнял как верстку как небольших лендингов (HTML, CSS, JS), так и полноценных SPA 
                    с реализованным фронт- и бэк-эндом (React, MongoDB, Express.js). 

                    <br/>В свое время проехал автостопом от Питера до Барселоны, и от Владивостока до Томска.
                    </p>
                    <a className="github__portfolio" href="https://github.com/RomanRiyanov">Github</a>
                </div>
                <img className="portfolioPhoto" src={PortfolioPhotoPath} alt='Фото студента Практикума'/>
            </div>
            <h3 className="subtittle__transparent ">Портфолио</h3>
            <ul className="default__linkList">
                <li>
                    <PortfolioLink text='Статичный сайт' link='https://github.com/RomanRiyanov/how-to-learn'/>
                </li>
                <li>               
                    <PortfolioLink text='Адаптивный сайт' link='https://romanriyanov.github.io/russian-travel-look/index.html'/>
                </li>
                <li>
                    <PortfolioLink text='Одностраничное приложение' link='https://romanriyanov.github.io/react-mesto-auth'/>
                </li>
            </ul>
      </section>    
    );
  }
  
  export default Portfolio;