import {
    NavLink,
  } from 'react-router-dom';

function ToolMenuPopup ({isOpen, onClose}) {

    function handleCloseButton() {
        console.log ('закрыть попап');
        onClose();
    }

    return (
        <section className={`toolMenuPopup ${isOpen && 'toolMenuPopup_viewable'}`}>
            <div className={`toolMenuPopup__window`}>
                <button type="button" onClick={handleCloseButton} className='button__closeToolPopup'></button>
            <nav className="toolMenuPopup__container">
                <NavLink activeClassName='toolMenuPopup__link_active' className='toolMenuPopup__link' to='/main'>Главная</NavLink>
                <NavLink activeClassName='toolMenuPopup__link_active' className='toolMenuPopup__link' to='/movies'>Фильмы</NavLink>
                <NavLink activeClassName='toolMenuPopup__link_active' className='toolMenuPopup__link' to='/saved-movies'>Сохраненные фильмы</NavLink>
                <button type="button" className='toolMenuPopup__link_account'>
                    <NavLink activeClassName='toolMenuPopup__link_active' className='toolMenuPopup__link' to='/profile'>
                        Аккаунт
                    </NavLink>
                </button>
            </nav>
            </div>
        </section>
    );
}

export default ToolMenuPopup;