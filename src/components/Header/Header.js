import headerLogoPath from '../../images/headerLogo.svg';
import {
    Route,
    Switch,
    Link,
    NavLink,
    useLocation
  } from 'react-router-dom';

function Header({ onToolButtonClick, loggedIn }) {

  const location = useLocation();
  const isMainLocation = location.pathname === '/main';
  const isSignLocation = location.pathname === '/signin' || location.pathname === '/signup';
  const headerMainClassname = `header__container ${
    (loggedIn && 'header__container_white') && 
    (isMainLocation || 'header__container_white')}`;
  const headerSignClassname = `header__container ${
    (loggedIn && 'header__container_white') && 
    (isSignLocation || 'header__container_white')}`;

  function openToolsPopup(){
    console.log('открыть всплывающее меню');
    onToolButtonClick();
  }

    return (
              loggedIn ? 
              <section className={isSignLocation ? headerSignClassname : headerMainClassname }>
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
              :
              <section className={headerMainClassname}>                  
                <img className='header__logo' src={headerLogoPath} alt='Логотип сайта'/>
                  <nav className='sign__container'>
                      <Link className='nav__link nav__link_signUpLink' to='/signup'>Регистрация</Link>
                      <button type="button" className='nav__link_signInLink'><Link className='nav__link nav__link_signInLink' to='/signin'>Войти</Link></button>
                  </nav>
                </section>
    );
  }
  
export default Header;
  