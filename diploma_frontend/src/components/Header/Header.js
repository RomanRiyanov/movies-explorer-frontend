import headerLogoPath from '../../images/headerLogo.svg';
import {
    Route,
    Switch,
    Link,
  } from 'react-router-dom';

function Header() {
    return (
          <div className='header_container'>
            <img className='header_logo' src={headerLogoPath} alt='Лого-спираль'/>
            <div className='nav_container'>
                <button className='signUpLink'>Регистрация</button>
                <button className='signIpLink'>Войти</button>
            </div>
          </div>
    );
  }
  
export default Header;
  