import {
  Route,
  Switch
} from 'react-router-dom';

function Footer() {
    return (
      <Switch>
        <Route exact path='/profile'>
          <section className='footer__container footer__container_disabled'>
          </section>
        </Route>
        <Route path='/'>
          <section className='footer__container'>
            <h3 className="footer__tittle">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className='footer__line'></div>
            <div className="footer__credits">
                <p className="footer__text footer__text_copyright">&#9400; 2022</p>
                <nav className="footer__links">
                    <a className="footer__text footer__text_link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
                    <a className="footer__text footer__text_link" href="https://github.com/RomanRiyanov">Github</a>
                </nav>
            </div>
          </section>
        </Route>
      </Switch>
    );
  }
  
export default Footer;
  