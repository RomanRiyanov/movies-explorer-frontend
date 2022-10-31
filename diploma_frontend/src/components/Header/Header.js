import headerLogoPath from '../../images/headerLogo.svg';
import {
    Route,
    Switch,
    Link,
  } from 'react-router-dom';



function Header() {

  function signOut(){
    localStorage.removeItem('jwt');
  }
  
    return (
            <Switch>
              <Route exact path='/'>
                <div className='header__container'>
                  <img className='header__logo' src={headerLogoPath} alt='Логотип сайта'/>
                  <h2 className='header__tittle'>Добро пожаловать!</h2>
                </div>
              </Route>
              <Route exact path='/main'>
                <div className='header__container'>
                  <img className='header__logo' src={headerLogoPath} alt='Логотип сайта'/>
                  <div className='sign__container'>
                      <button className='signUpLink'>Регистрация</button>
                      <button className='signIpLink'>Войти</button>
                  </div>
                </div>
              </Route>
              <Route exact path='/movies'>
                <div className='header__container header__container_white'>
                  <nav className='nav__container'>
                    <img className='header__logo' src={headerLogoPath} alt='Логотип сайта'/>
                    <Link onClick={signOut} className='header__link' to='/movies'>Фильмы</Link>
                    <Link onClick={signOut} className='header__link' to='/saved-movies'>Сохраненные фильмы</Link>
                     <button className='header__link_account'><Link onClick={signOut} className='header__link' to='/profile'>Аккаунт</Link></button>
                  </nav>
                </div>
              </Route>
            </Switch>
    );
  }
  
export default Header;
  