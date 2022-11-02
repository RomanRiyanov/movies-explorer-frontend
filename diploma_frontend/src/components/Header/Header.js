import headerLogoPath from '../../images/headerLogo.svg';
import {
    Route,
    Switch,
    Link,
    NavLink,
  } from 'react-router-dom';

function Header({ onToolButtonClick }) {

  function goToFislms(){
    console.log('идти во вкладку фильмы');
  }

  function goToSavedFislms(){
    console.log('идти во вкладку сохраненные фильмы');
  }
  
  function goToProfile(){
    console.log('идти во вкладку профиль');
  }

  function openToolsPopup(){
    console.log('открыть всплывающее меню');
    onToolButtonClick();
  }
    return (
            <Switch>
              <Route exact path='/main'>
                <div className='header__container'>
                  <img className='header__logo' src={headerLogoPath} alt='Логотип сайта'/>
                  <nav className='sign__container'>
                      <Link className='nav__link nav__link_signUpLink' to='/signup'>Регистрация</Link>
                      <button className='nav__link_signInLink'><Link className='nav__link nav__link_signInLink' to='/signin'>Войти</Link></button>
                  </nav>
                </div>
              </Route>
              <Route path='/'>
                <div className='header__container header__container_white'>
                  <nav className='nav__container'>
                    <img className='header__logo' src={headerLogoPath} alt='Логотип сайта'/>
                    <NavLink activeClassName='header__link_bold' onClick={goToFislms} className='header__link' to='/movies'>Фильмы</NavLink>
                    <NavLink activeClassName='header__link_bold' onClick={goToSavedFislms} className='header__link' to='/saved-movies'>Сохраненные фильмы</NavLink>
                    <button onClick={openToolsPopup} className='button__toolPopup'></button>
                    <button className='header__link_account'><NavLink activeClassName='header__link_bold' onClick={goToProfile} className='header__link' to='/profile'>Аккаунт</NavLink></button>
                  </nav>
                </div>
              </Route>
            </Switch>
    );
  }
  
export default Header;
  