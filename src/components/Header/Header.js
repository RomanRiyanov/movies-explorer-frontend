import headerLogoPath from '../../images/headerLogo.svg';
import {
    Route,
    Switch,
    Link,
    NavLink,
  } from 'react-router-dom';

function Header({ onToolButtonClick }) {

  function openToolsPopup(){
    console.log('открыть всплывающее меню');
    onToolButtonClick();
  }
    return (
            <Switch>
              <Route exact path='/main'>
                <section className='header__container'>                  
                  <img className='header__logo' src={headerLogoPath} alt='Логотип сайта'/>
                  <nav className='sign__container'>
                      <Link className='nav__link nav__link_signUpLink' to='/signup'>Регистрация</Link>
                      <button type="button" className='nav__link_signInLink'><Link className='nav__link nav__link_signInLink' to='/signin'>Войти</Link></button>
                  </nav>
                </section>
              </Route>
              <Route path='/'>
                <section className='header__container header__container_white'>
                  <nav className='nav__container'>
                    <a href="main"> 
                      <img className='header__logo' src={headerLogoPath} alt='Логотип сайта'/>
                    </a>
                    <NavLink activeClassName='header__link_bold' className='header__link' to='/movies'>Фильмы</NavLink>
                    <NavLink activeClassName='header__link_bold' className='header__link' to='/saved-movies'>Сохраненные фильмы</NavLink>
                    <button type="button" onClick={openToolsPopup} className='button__toolPopup'></button>
                    <button type="button" className='header__link_account'><NavLink activeClassName='header__link_bold' className='header__link' to='/profile'>Аккаунт</NavLink></button>
                  </nav>
                </section>
              </Route>
            </Switch>
    );
  }
  
export default Header;
  